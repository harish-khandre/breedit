"use client"; // Error components must be Client Components

import { useEffect } from "react";
import sadDog1 from "../../public/sadDog1.gif";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid place-items-center h-screen">
      <h2 className="text-[#c88572] text-2xl ">Something went wrong!</h2>
      <Image src={sadDog1} alt="Error" width={300} height={200} />
      {/* <iframe src="https://lottie.host/?file=5d593941-91ff-4184-971d-5b4436757b60/scoM2fgL7Z.json"></iframe> */}
      <h2 className="text-[#c88572] text-2xl ">Please try again</h2>{" "}
      <button
        className="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
