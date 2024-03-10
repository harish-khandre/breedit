import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";

export async function GET(req) {
  // Check if the userId variable is being passed in the request query.
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (userId === null || userId === undefined || !userId) {
    return NextResponse.send({ message: "invalid userId ." }, { status: 400 });
  }
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);

    const db = client.db("App-data");
    const users = db.collection("Users");

    const user = await users.findOne({ user_id: userId });

    // Check if the user exists.
    if (user === null || undefined) {
      return NextResponse.send(
        { message: "User not found." },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "not working at user get function" },
      { status: 400 },
    );
  } finally {
    await client.close();
  }
}
