"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OnBoarding() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "",
    pet_name: "",
    age: "",
    gender_identity: "",
    gender_interest: "",
    about: "",
    breed: "",
    matches: [],
  });
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) {
      URL.revokeObjectURL(fileUrl);
    }

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setFileUrl(objectUrl);
    } else {
      setFileUrl(null);
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", cookies.UserId);
    try {
      const response = await fetch("/api/s3", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    console.log("e", e);
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("/api/user", {
        formData,
      });

      const success = response.status === 200;
      if (success) router.push("/findpet");
    } catch (error) {
      console.log(error);
    }
    // Perform form validation here
    const { first_name, pet_name, age, gender_identity, about, breed } =
      formData;
    if (
      first_name === "" ||
      pet_name === "" ||
      age === "" ||
      gender_identity === "" ||
      about === "" ||
      breed === ""
    ) {
      alert("Please fill in all fields.");
    } else {
      // Perform form submission logic here
      console.log("Form submitted!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="onboarding mt-16 text-[#f7edbd]   bg-[#c88572]">
        <h2 className="text-center text-2xl  mt-6 font-bold text-[#f7edbd]">
          CREATE ACCOUNT
        </h2>
        <form
          onSubmit={uploadFile}
          className="flex flex-col justify-center items-center gap-4 "
        >
          <label>Profile Photo URL </label>
          <input
            type="file"
            onChange={handleFileChange}
            required={true}
            accept="image/*"
            className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
          />
          <div className="photo-container">
            {fileUrl && file && (
              <img src={fileUrl} className="w-60 m-4" alt="pfp" />
            )}
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={!file || uploading}
              className="button"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
            <button
              type="button"
              className="button"
              onClick={() => {
                setFile(null);
                setFileUrl(null);
              }}
            >
              Remove
            </button>
          </div>
        </form>
        <form
          onSubmit={handleSubmit}
          className=""
          encType="multipart/form-data"
        >
          <section>
            <label htmlFor="first_name">Your Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
              className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
            />
            <label htmlFor="pet_name">Pet&apos;s Name</label>
            <input
              id="pet_name"
              type="text"
              name="pet_name"
              required={true}
              value={formData.pet_name}
              onChange={handleChange}
              className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f] text-"
            />
            <label htmlFor="breed">Breed</label>
            <input
              id="breed"
              type="text"
              name="breed"
              required={true}
              value={formData.breed}
              onChange={handleChange}
              className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
            />

            <label htmlFor="age">Pet&apos;s Age</label>

            <input
              id="age"
              type="number"
              name="age"
              placeholder="Age"
              required={true}
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="30"
              className="border-b-2  bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f] "
            />
            <label>Pet&apos;s Gender</label>
            <div className="multiple-input-container  ">
              <input
                id="male-gender-identity"
                type="radio"
                name="gender_identity"
                value="Male"
                onChange={handleChange}
                checked={formData.gender_identity === "Male"}
                className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
              />
              <label htmlFor="male-gender-identity">Male</label>
              <input
                id="female-gender-identity"
                type="radio"
                name="gender_identity"
                value="Female"
                onChange={handleChange}
                checked={formData.gender_identity === "Female"}
                className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
              />
              <label htmlFor="female-gender-identity">Female</label>
            </div>
            <label>Gender Interest</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value="Male"
                onChange={handleChange}
                checked={formData.gender_interest === "Male"}
              />
              <label htmlFor="man-gender-interest">Male</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value="Female"
                onChange={handleChange}
                checked={formData.gender_interest === "Female"}
              />
              <label htmlFor="woman-gender-interest">Female </label>
            </div>

            <label htmlFor="about">About</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
              className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
            />
            <input type="submit" className="button" />
          </section>
        </form>
      </div>
    </>
  );
}
