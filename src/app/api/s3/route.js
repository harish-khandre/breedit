import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
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

export async function uploadFileToS3(file, fileName, user_id, size) {
  const fileBuffer = file;

  if (fileBuffer.length > size) {
    return NextResponse.json({ error: "File is too large" }, { status: 400 });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${fileName}-${Date.now()}`,
    Body: fileBuffer,
    ContentType: file.type,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);
  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = db.collection("Users");
    const query = { user_id };

    const updateDocument = {
      $set: {
        url: signedUrl.split("?")[0],
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

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const user_id = formData.get("user_id");
    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }
    if (!user_id) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const maxFileSize = 1024 * 1024 * 10;

    const fileName = await uploadFileToS3(
      buffer,
      file.name,
      user_id,
      maxFileSize,
    );

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "not working at post function" },
      { status: 400 },
    );
  }
}
