import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


export async function POST(req) {
    const {
      name,
      age,
      breed,
      description,
      healthCondition,
      gender,
      isVaccinated,
      url,
      number,
    } = await req.json();

     const uri = process.env.URI;
     let client;
  try {
     client = new MongoClient(uri);

    const db = client.db("App-data");

    const petsCollection =  db.collection("donate");

    const newPet = {
      name,
      age: parseInt(age),
      breed,
      description,
      healthCondition,
      gender,
      isVaccinated: Boolean(isVaccinated),
      url,
      number,
    };

     const result = await petsCollection.insertOne(newPet);

    return NextResponse.json({
      message: "Pet submitted successfully!",
      id: result.insertedId,
    }, {
        status: 201
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      error: "Internal Server Error",
    }, {
        status: 500
    })
  } finally {
    await client.close();
  }
}
