/* eslint-disable react/prop-types */
import { FaCircleUser } from "react-icons/fa6";
import { ChatDiv } from "../Style";

const ChatMessages = ({ name, message }) => {
  return (
    <ChatDiv>
      <FaCircleUser size={18} />
      <span style={{ fontWeight: "bold", paddingLeft: 3, paddingRight: 3 }}>
        {name}
      </span>
      <span>{message}</span>
    </ChatDiv>
  );
};

export default ChatMessages;
