"use client";

import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Components/theme";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  TextField,
} from "@mui/material";
import MobileUsers from "../Components/MobileUsers";

const FormPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [formData, setFormData] = useState({
    user_id: cookies?.UserId,
    name: "",
    age: "",
    breed: "",
    description: "",
    healthCondition: "",
    gender: "",
    isVaccinated: false,
    url: "",
    number: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.breed ||
      !formData.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://breedit.vercel.app/api/submit",
        formData,
      );
      console.log(response);
      setFormData({
        name: "",
        age: "",
        breed: "",
        description: "",
        healthCondition: "",
        gender: "",
        isVaccinated: false,
        url: "",
        number: "",
      });
      toast.success("Successfully Submitted");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while submitting the pet. Please try again." + error,
      );
    }
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return isTabletOrMobile ? (
    <MobileUsers />
  ) : (
    <ThemeProvider theme={theme}>
      <div className="container m-auto mt-3 p-8 authBlogCard w-2/4 ">
        <h2 className="text-3xl my-4">Submit a Pet for Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col relative">
            <TextField
              label="Name"
              variant="standard"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="flex flex-col relative">
            <TextField
              label="Contact Number"
              variant="standard"
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col relative">
            <TextField
              label="Age"
              variant="standard"
              min="1"
              max="30"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className=""
              required
            />{" "}
          </div>
          <div className="flex flex-col relative">
            <TextField
              variant="standard"
              label="Breed"
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="px-4 border-b border-[#505f2f]  focus:outline-none focus:border-[#f7ebdb] focus:border-b-2 transition-colors peer bg-transparent"
              required
            />{" "}
          </div>
          <div className="flex flex-col relative">
            <TextField
              label="Health Condition"
              variant="standard"
              type="text"
              id="healthCondition"
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              className="  px-4 border-b border-[#505f2f] py-1 focus:outline-none focus:border-[#f7ebdb] focus:border-b-2 transition-colors peer bg-transparent"
            />{" "}
          </div>
          <div className="flex flex-co relative">
            <InputLabel className="m-4" id="demo-simple-select-standard-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              label="Gender"
              variant="standard"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className=""
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </div>
          <div className="flex items-center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isVaccinated}
                  onChange={(event) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      isVaccinated: event.target.checked,
                    }))
                  }
                  className="mr-2"
                />
              }
              label="Vaccinated"
            />
          </div>
          <div className="flex flex-col border-none">
            <label htmlFor="url">Profile Photo URL </label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
              className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
              value={formData.url}
            />
            <div className="photo-container">
              {formData.url && <img src={formData.url} alt="pfp" />}
            </div>
          </div>
          <div className="flex flex-col relative">
            <TextField
              variant="outlined"
              label="Reason"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className=" px-4 border-b border-[#505f2f] py-1 focus:outline-none focus:border-[#f7ebdb] focus:border-b-2 transition-colors peer bg-transparent"
              required
            />

            {/* <label className="absolute left-0 top-1 text-[#505f2f] cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#f7ebdb] transition-all">
            {" "}
            Reason{" "}
          </label> */}
          </div>{" "}
          <button type="submit" to="/" className="button">
            Submit
          </button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default FormPage;
