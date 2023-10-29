import { LoadingOutlined } from "@ant-design/icons";
import runningDog from "../../public/runningDog.gif";
import Image from "next/image";

export default function Loading() {
  return (
    <div className=" bg-[#f7ebdb] grid place-items-center h-screen  ">
      <div className="flex flex-col gap-4 ">
        {/* <iframe src={runningDog}></iframe> */}
        {/* <iframe src="https://lottie.host/?file=2bb95f8d-365f-4c52-ad64-c09877253ce9/eTCrIAPJcE.json"></iframe> */}
        <Image
          src={runningDog}
          alt="Loading"
          width={200}
          height={200}
          quality={100}
        />

        <h1 className="text-[#c88572] text-2xl">
          Loading <LoadingOutlined className=" mx-2 animate-spin" />
        </h1>
      </div>
    </div>
  );
}
