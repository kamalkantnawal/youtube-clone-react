import { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { chatData } from "../../../../../Store/Reducers/ProjectInfo";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveData = useSelector((store) => store.project.livechatmessage);
  useEffect(() => {
    let intervalId = setInterval(() => {
      const updatedData = [
        ...liveData,
        { name: "Kamal", message: "Welcome everyone to chat" },
      ];

      dispatch(
        chatData({
          path: "livechatmessage",
          value: updatedData,
        })
      );
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [liveData]);

  return (
    <div>
      {liveData.map((item, index) => (
        <ChatMessages key={index} name={item?.name} message={item?.message} />
      ))}
    </div>
  );
};

export default LiveChat;
