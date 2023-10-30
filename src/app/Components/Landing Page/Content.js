import Image from "next/image";
import Link from "next/link";
import React from "react";

const Content = () => {
  return (
    <div>
      <section className="text-[#505f2f] body-font md:m-0 lg:m-16 lg:rounded-3xl md:rounded-none lg:pb-16 font-bold">
        <div className="container px-5 pt-8 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#c88572] ">
                WANT A PET ?
              </h1>
              <div className="h-1 w-20 bg-[#505f2f] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full text-base leading-relaxed text-[#505f2f]">
              BREEDIT is committed to breeding healthy and happy pets for
              adoption. We care for our pets and ensure that they&apos;re given
              a loving and nurturing environment.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="/findpet/findpet">
                <div className="bg-[#505f2f]  rounded-full blogCard contain">
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                    }}
                    height={384}
                    width={300}
                    className="img h-96 rounded-full w-full object-cover object-center "
                    src="https://media.tenor.com/APAoWgAqNxkAAAAM/cat-dance-catto-dace.gif"
                    alt="content"
                    priority={false}
                  />
                  <div className="middle">
                    <h3 className="TextOnImg tracking-widest text-[#f7ebdb] text-xl text-center  font-medium title-font">
                      Pussy
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="/findpet/findpet">
                <div className="bg-[#505f2f]  rounded-full blogCard contain ">
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                    }}
                    width={300}
                    height={384}
                    priority={false}
                    className="img h-96 rounded-full w-full object-cover object-center "
                    src="https://media.tenor.com/cNnsPB7dYfYAAAAM/dancing-dog.gif"
                    alt="content"
                  />{" "}
                  <div className="middle">
                    <h3 className=" TextOnImg tracking-widest text-[#f7ebdb] text-center text-xl font-medium title-font">
                      Dog
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="/findpet/findpet">
                <div className="bg-[#505f2f]  rounded-full blogCard contain">
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                    }}
                    width={300}
                    height={384}
                    priority={false}
                    className="img h-96 rounded-full w-full object-cover object-center "
                    src="https://media.tenor.com/Jxbk24m0vV4AAAAM/vibe-rabbit.gif"
                    alt="content"
                  />{" "}
                  <div className=" middle">
                    <h3 className=" TextOnImg tracking-widest text-[#f7ebdb] text-xl text-center font-medium title-font">
                      Rabbit
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4 md:pb-8">
              <Link href="/findpet/findpet">
                <div className="bg-[#505f2f]  contain rounded-full blogCard   ">
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                    }}
                    width={300}
                    height={384}
                    priority={false}
                    className=" img h-96 rounded-full w-full object-cover object-center "
                    src="https://media.tenor.com/y_iz1S6VNfkAAAAM/eternaldamnationhamster-edhamsterdance.gif"
                    alt="content"
                  />
                  <div className="middle ">
                    <h3 className=" TextOnImg tracking-widest text-[#f7ebdb] text-xl text-center font-medium title-font cursor-pointer">
                      Hamster
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
