import React from "react";
import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <div>
      <section className="text-[#505f2f] body-font md:m-0 lg:m-16 mt-0">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4  ">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Our Exceptional Team: Passionate, Knowledgeable, Committed. Trust
              Breedit to connect you with your perfect pet companion.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2 ">
              <div className="h-full flex flex-col items-center text-center rounded-lg bg-[#505f2f] blogCard">
                <Image
                  height={200}
                  width={200}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full  ">
                  <h2 className="title-font font-medium text-lg  ">
                    Harish Khandre
                  </h2>
                  <h3 className="text-[#f7ebdb]  mb-3">UI Developer</h3>
                  <p className="mb-4 text-[#f7ebdb]">
                    Developed front end of the Site
                  </p>
                  <span className="inline-flex">
                    <Link href="/" className="text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center rounded-lg bg-[#505f2f] blogCard">
                <Image
                  height={200}
                  width={200}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg  ">
                    Harish Khandre
                  </h2>
                  <h3 className="text-[#f7ebdb]  mb-3">Backend Developer</h3>
                  <p className="mb-4 text-[#f7ebdb]">
                    Created Backend for this wonderful website
                  </p>
                  <span className="inline-flex">
                    <Link href="/" className="text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center rounded-lg bg-[#505f2f] blogCard">
                <Image
                  height={200}
                  width={200}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg  ">
                    Harish Khandre
                  </h2>
                  <h3 className="text-[#f7ebdb]  mb-3">Full stack Developer</h3>
                  <p className="mb-4 text-[#f7ebdb]">Create this site solely</p>
                  <span className="inline-flex">
                    <Link href="/" className="text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center rounded-lg bg-[#505f2f] blogCard">
                <Image
                  height={200}
                  width={200}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg  ">
                    Henry Letham
                  </h2>
                  <h3 className="text-[#f7ebdb]  mb-3">UI Developer</h3>
                  <p className="mb-4 text-[#f7ebdb]">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <Link href="/" className="text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link href="/" className="ml-2 text-[#f7ebdb] ">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
