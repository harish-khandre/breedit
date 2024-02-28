"use client";

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useCookies } from "react-cookie";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import MobileUsers from "@/app/Components/MobileUsers";

// export const revalidate = 60;

export default function FindAnimal() {
  const [donatedPets, setDonatedPets] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    age: "",
    breed: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const fetchDonatedPets = async () => {
    try {
      const response = await axios.get("/api/donate", {
        next: {
          revalidate: 60,
        },
      });
      setDonatedPets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDonatedPets();
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions((prevFilterOptions) => ({
      ...prevFilterOptions,
      [name]: value,
    }));
  };

  const filteredPets = donatedPets.filter((pet) => {
    return (
      (filterOptions.age === "" || pet.age.toString() === filterOptions.age) &&
      (filterOptions.breed === "" ||
        pet.breed.toLowerCase().includes(filterOptions.breed.toLowerCase()))
    );
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return isTabletOrMobile ? (
    <MobileUsers />
  ) : (
    <>
      <Navbar />

      <div className="container mx-auto p-8 mt-16 ">
        <h2 className="text-3xl font-bold mb-8">Donated Pets</h2>
        <div className="flex justify-center items-center mb-16">
          <div className="mb-4 ">
            <label className="font-semibold m-4">Filter by Age:</label>
            <select
              name="age"
              value={filterOptions.age}
              onChange={handleFilterChange}
              className="border rounded py-2 px-4 bg-[#c88572] text-[#f7ebdb] focus:ring-2 ring-[#505f2f] outline-none "
            >
              <option value="">Age</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              {/* Add more age options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="font-semibold m-4 ">Filter by Breed:</label>
            <input
              type="text"
              name="breed"
              value={filterOptions.breed}
              onChange={handleFilterChange}
              className=" py-2 px-4 border-b-2  bg-[#c88572] focus:outline-none focus:border-[#c88572] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f] text-[#f7ebdb]"
              placeholder=""
            />
          </div>
        </div>
        {filteredPets.length === 0 ? (
          <p>No donated pets found.</p>
        ) : (
          <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredPets.map((pet) => (
              <div key={pet._id} className="border rounded blogCard h-fit">
                {pet.url && (
                  <Image
                    src={`${pet.url}`}
                    alt={pet.name}
                    width={100}
                    height={100}
                    className=" object-fit w-full object-cover object-center "
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold tracking-wide text-[#f7ebdb]">
                    {pet.name}
                  </h3>
                  <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                    <span className="text-[#505f2f]"> Age: </span> {pet.age}
                  </p>
                  <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                    <span className="text-[#505f2f]">Breed: </span>
                    {pet.breed}
                  </p>
                  <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                    <span className="text-[#505f2f]">Contact: </span>
                    {pet.number}
                  </p>
                  <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                    <span className="text-[#505f2f]"> Reason:</span>{" "}
                    {pet.description}
                  </p>
                  {pet.healthCondition && (
                    <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                      <span className="text-[#505f2f]">Health Condition:</span>{" "}
                      {pet.healthCondition}
                    </p>
                  )}
                  {pet.gender && (
                    <p className="text-base leading-relaxed pb-1 font-semibold text-[#f7ebdb]">
                      <span className="text-[#505f2f]">Gender:</span>{" "}
                      {pet.gender}
                    </p>
                  )}
                  {pet.isVaccinated && (
                    <p className="text-base leading-relaxed pb-2 font-semibold text-[#f7ebdb]">
                      Vaccinated
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
