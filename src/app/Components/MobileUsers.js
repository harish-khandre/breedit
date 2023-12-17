import Image from "next/image";
import React from "react";

const MobileUsers = () => {
  return (
    <>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="border text-card-foreground w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          data-v0-t="card"
        >
          <div className="space-y-1.5 p-6 flex flex-col sm:flex-row">
            <div className="p-8">
              <div className="items-center border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white">
                Important
              </div>
              <h2 className="block mt-4 text-lg leading-tight font-semibold text-gray-900">
                Desktop Only
              </h2>
              <p className="mt-2 text-gray-500">
                We&apos;re sorry but this site is only available for Desktop
                users. Please visit us again on a pc or wait for our Mobile app.
              </p>
            </div>
            <div
              className="h-48 md:w-48 md:h-auto md:rounded-none rounded-t lg:rounded-l-none lg:rounded-r text-center overflow-hidden"
              style={{
                background:
                  "url(/placeholder.svg?height=48&width=48) no-repeat center / cover",
              }}
            >
              <img
                alt="Sad Dog"
                className="w-full h-full"
                height="48"
                src="https://png.pngtree.com/png-clipart/20230404/original/pngtree-sticker-dog-cartoon-illustration-sad-puppy-png-image_9024905.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MobileUsers;
