import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

export async function POST(req) {
  const { email, password } = await req.json();
  const uri = process.env.URI;
  let client;
  try {
    client = new MongoClient(uri);
    const db = client.db("App-data");
    const users = db.collection("Users");
    const user = await users.findOne({ email });
    if (!user) {
      // Handle user not found
      console.log("User not found");
      return NextResponse.json("missing user");
    }
    if (!password || !user.hashed_password) {
      // Handle missing password or hashed_password
      console.log("Missing password or hashed_password");
      return NextResponse.json("missing");
    }
    const correctPassword = await bcrypt.compare(
      password,
      user.hashed_password
    );
    if (user && correctPassword) {
      const token = jwt.sign(user, email, {
        expiresIn: 60 * 48,
      });
      return NextResponse.json(
        { token, userId: user.user_id },
        {
          status: 201,
        }
      );
    }
    return NextResponse.json(
      { message: "Invalid Credentials" },
      {
        status: 400,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message:
          "There was an error creating your account. Please try again later.",
      },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
