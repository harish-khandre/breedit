import Image from "next/image";
import Link from "next/link";

const ChatHeader = ({ user }) => {
  return (
    <div className="chat-container-header">
      <Link href="/profile">
        <div className="profile">
          <div className="img-container">
            <Image
            width={100}
            height={100}
              className=""
              src={user.url}
              alt={"photo of " + user.first_name}
            />
          </div>
          <h3 className="mx-4 font-bold text-xl">{user.first_name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ChatHeader;
