"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import Image from "next/image";

const FindPetPage = () => {
  return (
    <section>
    <Navbar />
      <div className="mt-28">
        <div className="flex  justify-evenly items-center  ">
          <div className="findMate w-full  flex justify-center items-center ">
            <section>
              <Link href="/findpet/findmate">
                <div className="blogCard p-5">
                  <div className="w-full">
                    <Image
                      width={500}
                      height={300}
                      src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGV0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="ky mahit"
                      className="w-full rounded-lg h-80 cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-3xl text-[#f7ebdb] font-bold tracking-wide drop-shadow-lg shadow-black">
                      Find a mate for your pet
                    </h2>
                  </div>
                </div>
              </Link>
            </section>
          </div>
          <div className="findMate w-full  flex justify-center items-center ">
            <section>
              <Link href="/findpet/findanimal">
                <div className="blogCard p-5">
                  <div className="w-full">
                    <Image
                      width={500}
                      height={300}
                      src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwcGV0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                      alt="ky mahit"
                      className="w-full rounded-lg h-80 cover "
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-3xl text-[#f7ebdb] font-bold drop-shadow-lg tracking-wide shadow-black ">
                      Add a member to your family
                    </h2>
                  </div>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindPetPage;
