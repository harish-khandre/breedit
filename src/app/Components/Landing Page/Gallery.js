import React from "react";
import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <section className="text-[#f7ebdb] body-font md:m-0 lg:m-16 mt-0 lg:rounded-3xl md:rounded-none authBlogCard font-bold">
        <div className="container  py-12 px-14 mx-auto flex flex-wrap">
          <Link href="https://www.reddit.com/r/BREEDITT/">
            <div className="flex w-full mb-14 flex-wrap">
              <h1 className="sm:text-3xl font-bold title-font  lg:w-1/3 lg:mb-0 mb-4  hover:text-[#505f2f] tracking-wide text-2xl  hover:underline underline-offset-8 decoration-1 duration-500 ">
                Top-voted Photos on Our Reedit page
              </h1>
              <p className="lg:pl-16 lg:w-2/3 mx-auto leading-relaxed text-lg  text-[#505f2f] ">
                We feature a gallery of our top-voted Reddit posts. This
                includes photos of our pets, tips and advice on pet care, and
                interesting facts about different breeds.
              </p>
            </div>
          </Link>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  width={500}
                  height={500}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center block"
                  src="https://images.pexels.com/photos/6897446/pexels-photo-6897446.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center block"
                  src="https://images.pexels.com/photos/7651066/pexels-photo-7651066.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full object-cover h-full object-center block"
                  src="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }}
                  alt="gallery"
                  width={500}
                  height={500}
                  className="w-full object-cover h-full object-center block"
                  src="https://images.unsplash.com/photo-1655527291171-73c4677c3281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbXN0ZXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
