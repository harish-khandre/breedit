import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(req) {
  // const gender = req.query.gender;
  const url = new URL(req.url);
  const gender = url.searchParams.get("gender");
  let client;
  const uri = process.env.URI;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = db.collection("Users");
    const query = { gender_identity: { $eq: gender } };
    const foundUsers = await users.find(query).toArray();
    return NextResponse.json(foundUsers);
  } catch (e) {
    console.error(e);
    return NextResponse.json({
message: " Gendered User Api Error "
    }, {
      status: 500
    })
  } finally {
    await client.close();
  }
}
