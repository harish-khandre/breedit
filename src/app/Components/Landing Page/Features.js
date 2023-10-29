import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section className="body-font bg-[#c88572] lg:m-16 lg:rounded-3xl md:rounded-none authBlogCard pt-2 font-bold">
        <div className="container px-8 py-8 mx-auto">
          <div className="text-center mb-8">
            <h1 className="sm:text-3xl text-2xl pb-4 title-font mb-4">
              Breeding love, one pet at a time.{" "}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#505f2f]">
              We are passionate about breeding pets and making sure they're
              healthy and happy. Our team is made up of experts in breeding and
              animal care, so you can trust our services.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-[#505f2f] inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9-9-18 9 18-3-9h-4"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font mb-3">
                  Expert Breeding
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  Our expert team of breeders is experienced in breeding a
                  variety of pets with great care and attention.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-[#f7ebdb] hover:text-[#505f2f] inline-flex items-center pt-6"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx={6} cy={6} r={3}></circle>
                  <circle cx={6} cy={18} r={3}></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font font-medium mb-3">
                  High-Quality Care
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  We care for our pets like they're our own. They're checked and
                  tested for any health conditions, vaccinations are kept
                  up-to-date, and they're given a healthy diet.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-[#f7ebdb] inline-flex items-center hover:text-[#505f2f]"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#505f2f] text-[#f7ebdb] mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx={12} cy={7} r={4}></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-[#f7ebdb] text-lg title-font mb-3">
                  Selection of Breeds
                </h2>
                <p className="leading-relaxed text-base text-[#505f2f]">
                  We have a selection of breeds for you to choose from. We're
                  sure you'll find the perfect companion for your lifestyle.
                </p>
                <Link
                  href="/"
                  className="mt-3 text-[#f7ebdb] inline-flex items-center hover:text-[#505f2f] pt-4"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-8 border-0 py-4 px-8 focus:outline-none hover:bg-[#505f2f] rounded text-lg button text-[#f7ebdb] bg-[#505f2f]">
            Search Partner
          </button>
        </div>
      </section>
    </>
  );
};

export default Features;
