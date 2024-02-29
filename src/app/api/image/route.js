import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function PUT(req) {
  const { img } = await req.json();
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);

    const db = client.db("App-data");
    const users = db.collection("Users");
    const query = { user_id: formData.user_id };

    const updateDocument = {
      $set: {
        img: img,
      },
    };

    const insertedUser = await users.updateOne(query, updateDocument);

    return NextResponse.json(insertedUser);
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
