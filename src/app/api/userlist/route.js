import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function GET() {
  let client;
  const uri = process.env.URI;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = await db.collection("Users").find().toArray();
    return  NextResponse.json(users);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
