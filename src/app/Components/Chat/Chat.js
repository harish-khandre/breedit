import Image from "next/image";
import { useEffect, useRef } from "react"
const Chat = ({ desecendingOrderMessages }) => {

  const bottomPanelRef = useRef(null)


  useEffect(()  => {
 if (bottomPanelRef.current){
  bottomPanelRef.current.scrollIntoView();
 }
  }, [])
  

  return (
    <>
      <div className="chat-display ">
        {desecendingOrderMessages?.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header flex flex-col justify-evenly p-0 m-0 ">
              <div className="chat-img-container ">
                <Image
                  className="float-left m-0 p-0"
                  height={100}
                  width={100}
                  src={message.img}
                  alt={message.pet_name + " profile"}
                />
              </div>
              <p className="text-xs  text-[#505f2f]  ">{message.name}</p>
            </div>
            <p className=" break-all px-4 p-2 m-2 font-medium tracking-wide text-[#f7ebdb] bg-[#505f2f] border-2 rounded-full max-w-fit  overflow-y-auto ">
              {message.message}
            </p>
          </div>
        ))}
      </div>
      <div ref={bottomPanelRef}></div>
    </>
  );
};

export default Chat;
