import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
export async function GET(req) {
  const userId = req.cookies.userId;

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

    /* if (
      user.url === null ||
      user.url === undefined ||
      !user.url ||
      user.url === "" ||
      user.pet_name === null ||
      user.pet_name === undefined ||
      !user.pet_name ||
      user.pet_name === "" ||
      user.breed === null ||
      user.breed === undefined ||
      !user.breed
    ) {
      return NextResponse.send(
        { message: "User is missing information. Please update your profile." },
        {
          status: 404,
        },
      );
    } */

    const hasUploadedImageAndData = user.url !== null && user.pet_name !== null;

    return NextResponse.json({ hasUploadedImageAndData });
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
