import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const donatedPets = await db.collection("donate").find().toArray();
    return NextResponse.json(donatedPets);
  } catch (e) {
    console.error(e);
    return NextResponse(
      {
        message: "An error occurred while fetching donated pets.",
      },
      {
        status: 500,
      }
    );
  } finally {
    await client.close();
  }
}
