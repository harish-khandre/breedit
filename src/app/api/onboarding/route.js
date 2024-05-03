import { MongoClient } from "mongodb";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS credentials are not provided in environment variables.");
}

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(file, fileName, size) {
  const fileBuffer = file;

  if (fileBuffer.length > size) {
    return NextResponse.json({ error: "File is too large" }, { status: 400 });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: "image/jpeg",
  };

  try {
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    console.log(signedUrl);
    return signedUrl.split("?")[0];
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req) {
  const formData = await req.formData();
  console.log(formData);
  const first_name = formData.get("name");
  const pet_name = formData.get("pet_name");
  const breed = formData.get("breed");
  const file = formData.get("file");
  const user_id = formData.get("user_id");
  const age = formData.get("age");
  const gender_identity = formData.get("gender_identity");
  const gender_interest = formData.get("gender_interest");
  const about = formData.get("about");

  if (!file) {
    return NextResponse.json({ message: "File not found" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const maxFileSize = 1024 * 1024 * 10;

  const img = await uploadFileToS3(buffer, file.name, maxFileSize);
  let client;
  const uri = process.env.URI;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = db.collection("Users");
    const query = { user_id };

    const updateDocument = {
      $set: {
        first_name: first_name,
        age: age,
        url: img,
        pet_name: pet_name,
        breed: breed,
        gender_identity: gender_identity,
        gender_interest: gender_interest,
        about: about,
        matches: [],
      },
    };
    const insertedFile = await users.updateOne(query, updateDocument);
    return NextResponse.json(insertedFile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "not working at user put function" },
      { status: 400 },
    );
  } finally {
    await client.close();
  }
}
