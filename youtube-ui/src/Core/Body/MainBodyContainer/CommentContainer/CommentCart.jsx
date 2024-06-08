/* eslint-disable react/prop-types */
import { Button } from "antd";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Wrapper } from "./Style";

const CommentCart = ({ data }) => {
  const [flag, setFlag] = useState(false);

  const handleReply = () => {
    setFlag(!flag);
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", marginBottom: 5 }}>
        <FaCircleUser size={38} />
        <div style={{ marginLeft: 10 }}>
          <span style={{ fontWeight: "bold" }}>@{data.username}</span>
          <div>{data.comment}</div>
        </div>
      </div>
      <div>
        {/* <Button className="btn" onClick={handleReply}>
          Reply
        </Button> */}
        {/* {flag && data.reply && (
          <div>
            {data.reply.map((item, index) => (
              <div style={{ marginLeft: 15 }} key={index}>
                <div>@{item.username}</div>
                <div>{item.comment}</div>
                {item.reply &&
                  item.reply.map((subItem, subIndex) => (
                    <div
                      key={`${index}-${subIndex}`}
                      style={{ marginLeft: 15 }}
                    >
                      <div>@{subItem.username}</div>
                      <div>{subItem.comment}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )} */}
      </div>
    </Wrapper>
  );
};

export default CommentCart;
