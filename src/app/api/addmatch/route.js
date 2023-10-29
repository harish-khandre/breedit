import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function PUT(req) {
  const { userId, matchedUserId } = await req.json();
  console.log(userId, matchedUserId);
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");

    const users = db.collection("Users");

    const query = { user_id: userId };

    const updateDocument = {
      $push: { matches: { user_id: matchedUserId } },
    };

    const user = await users.updateOne(query, updateDocument);

    return NextResponse.json(user);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "add match error" },
      {
        status: 500,
      }
    );
  } finally {
    await client.close();
  }
}
