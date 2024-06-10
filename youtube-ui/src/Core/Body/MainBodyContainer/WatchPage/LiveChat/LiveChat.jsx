import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { chatData } from "../../../../../Store/Reducers/ProjectInfo";
import { generateRand, randomString } from "./Helper";
import { Button, Input } from "antd";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const liveData = useSelector((store) => store.project.livechatmessage);
  const sendData = () => {
    dispatch(chatData({ name: generateRand(), message: liveMessage }));
    setLiveMessage("");
  };
  useEffect(() => {
    console.log("length of the live data", liveData.length);

    let intervalId = setInterval(() => {
      dispatch(chatData({ name: generateRand(), message: randomString(15) }));
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
      <div style={{ position: "relative" }}>
        <Input.TextArea
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></Input.TextArea>
        <Button
          onClick={sendData}
          style={{ position: "absolute", top: 22, right: 0 }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default LiveChat;
