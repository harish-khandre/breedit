import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(req) {
  // original one = const userIds = JSON.parse(req.query.userIds);
  const url = new URL(req.url);
  const userId = url.searchParams.get("userIds");
  const userIds = JSON.parse(userId);
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = db.collection("Users");

    const pipeline = [
      {
        $match: {
          user_id: {
            $in: userIds,
          },
        },
      },
    ];
    const foundUsers = await users.aggregate(pipeline).toArray();

    return NextResponse.json(foundUsers);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: ` i dont know this is users route error${e}` },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
