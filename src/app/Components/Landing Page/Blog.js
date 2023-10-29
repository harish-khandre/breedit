import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font md:m-0 lg:m-16 mt-0 font-medium">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  bg-[#505f2f]   rounded-lg overflow-hidden blogCard">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/4408935/pexels-photo-4408935.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#f7ebdb] mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-lg  text-[#505f2f] mb-3 font-semibold ">
                    How Pets Help Us Maintain Good Mental Health
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#f7ebdb]">
                    A recent survey shows that 87% of pet owners say they have
                    experienced mental health improvements resulting from pet
                    ownership.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://habri.org/blog/how-pets-help-us-maintain-good-mental-health-blog/"
                      className=" hover:text-[#505f2f] inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-[#505f2f] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-[#505f2f] inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  bg-[#505f2f]  rounded-lg overflow-hidden blogCard">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#f7ebdb] mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-[#505f2f] mb-3">
                    Best Treats For Dogs In India
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#f7ebdb]">
                    If you have a pet dog, then you might be looking for the
                    best dog treats available on the market. Apart from
                    affection comes proper care and a healthy diet.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link
                      href="https://pawsindia.com/blogs/news/best-treats-for-dogs-in-india"
                      className=" hover:text-[#505f2f] inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-[#505f2f] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      2.5K
                    </span>
                    <span className="text-[#505f2f] inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      45
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full  bg-[#505f2f] rounded-lg overflow-hidden blogCard">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.pexels.com/photos/6469639/pexels-photo-6469639.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-[#f7ebdb] mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-lg font-semibold mb-3 text-[#505f2f]">
                    How to Care for Rabbits in the Winter
                  </h1>
                  <p className="leading-relaxed mb-3 text-[#f7ebdb]">
                    Rabbits in particular are at risk of being affected by the
                    cold and ice. In the wild, rabbits live underground which
                    offers them natural protection from the elements.{" "}
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link href="https://www.thepetexpress.co.uk/blog/general-interest/covers-and-weather-shields-for-your-rabbit-hutch/"
                      className="hover:text-[#505f2f] inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span className="text-[#505f2f] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      6.5k
                    </span>
                    <span className="text-[#505f2f] inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      52
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
