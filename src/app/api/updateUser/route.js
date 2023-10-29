import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


export async function PUT(req) {
    const {formData} = await req.json();
     const uri = process.env.URI;
     let client;
  try {
        client = new MongoClient(uri);

    const db = client.db("App-data");

    const users = await db.collection("Users");

     const query = { user_id: formData.user_id };

     
    const updateDocument = {
      $set: {
        first_name: formData.first_name,
        age: formData.age,
        pet_name: formData.pet_name,
        breed: formData.breed,
        gender_identity: formData.gender_identity,
        gender_interest: formData.gender_interest,
        url: formData.url,
        about: formData.about,
        matches: formData.matches,
      },
    };

    const insertedUser = await users.updateOne(query, updateDocument);

    return NextResponse.json(insertedUser);
  } catch (e) {
    console.error(e);
  }finally {
    await client.close();
  }
}
