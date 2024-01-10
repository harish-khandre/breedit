import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(req) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");
  const correspondingUserId = url.searchParams.get("correspondingUserId");
  const uri = process.env.URI;
  let client;

  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const messages = db.collection("messages");
    const query = {
      from_userId: userId,
      to_userId: correspondingUserId,
    };
    const foundMessages = await messages.find(query).toArray();
    return NextResponse.json(foundMessages);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "messages api error" },
      { status: 400 },
    );
  } finally {
    await client.close();
  }
}

export async function POST(req) {
  const { message } = await req.json();
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const messages = db.collection("messages");
    const insertedMessage = await messages.insertOne(message);
    return NextResponse.send(insertedMessage);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "messages api error" },
      { status: 400 },
    );
  } finally {
    await client.close();
  }
}
