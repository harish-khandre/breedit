import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  // Await the result of the req.json() function before accessing the userData variable.
  const userData = await req.json();
  console.log(userData);

  // Check if the user exists before creating a new one.
  const { email, password } = userData;
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  const uri = process.env.URI;
  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const db = client.db("App-data");
    const users = db.collection("Users");

    // Check if the user exists.
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists. Please login" },
        { status: 409 }
      );
    }

    // Sanitize the user email before inserting it into the database.
    const sanitizedEmail = email.toLowerCase().trim();

    // Generate a new user ID.
    const generatedUserId = uuidv4();

    // Generate a salt and hash the password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database.
    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };
    await users.insertOne(data);

    // Generate a JWT token.
    const token = jwt.sign(
      { userId: generatedUserId },
      process.env.JWT_SECRET,
      { expiresIn: "48h" }
    );

    // Return a success response with the token and user ID.
    return NextResponse.json(
      { token, userId: generatedUserId },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  } finally {
    await client.close();
  }
}
