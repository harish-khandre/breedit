"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";

const Hero = () => {
  const items = [
    {
      url: "https://imgur.com/fvpgyd4.png",
      name: "Adopt a Pet",
      description:
        "Adopt Happiness, Adopt Home: Embrace the journey of companionship. Adopt a pet, ignite an unbreakable bond, and fill your home with wagging tails and boundless love.",
      page: "/findpet/findanimal",
    },
    {
      url: "https://i.imgur.com/5TS3Gz6.png",
      name: "Mate for  Pet",
      description:
        "Looking for a new playmate for your beloved fur baby? Our community is a hub for pet lovers like you, With whom you can connect and accompany them ",
      page: "/findpet/findmate",
    },
    {
      url: "https://i.imgur.com/MAucF1M.png",
      name: "Join our reddit",
      description:
        "Join Reddit, Join the Fun: Dive into our vibrant Reddit community of pet enthusiasts. Share, learn, and cherish moments with fellow pet lovers who speak your language",
      page: "https://www.reddit.com/r/BREEDITT/comments/14k8kq1/introducing_breedit_the_ultimate_community/?onetap_auto=true",
    },
    {
      url: "https://imgur.com/7Cpiw3v.png",
      name: "Give them home ",
      description:
        " Your generosity can change lives. Contribute to our cause by uploading pets who are relinquished by their owners on our site to help pets find their forever homes. Together, we can create tails of happiness!",
      page: "/relinquish",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

const CarouselItem = ({ item }) => {
  return (
    <div className="relative flex justify-center items-center my-8 mt-16 pb-12 lg:h-[40rem] md:h-auto w-full">
      <div className="relative lg:h-[35rem] md:h-auto lg:w-[90%] border-4 border-dotted rounded-3xl border-[#505f2f] m-6 ">
        <Image
          src={item.url}
          alt={item.name}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          height={900}
          width={900}
          quality={100}
          className="h-full w-full object-cover rounded-2xl  "
        />
        <div className="lg:absolute lg:left-[65%] inset-0 flex flex-col justify-center items-center">
          <h2 className="text-[#505f2f] text-2xl font-bold text-left self-start pl-5 ">
            {item.name}
          </h2>
          <p className="text-[#505f2f] lg:text-lg font-semibold break-words p-4 lg:text-left md:text-center md:text-xs ">
            {item.description}
          </p>
          <button className=" self-end button mx-12 ">
            <a href={item.page}>Go to page</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
