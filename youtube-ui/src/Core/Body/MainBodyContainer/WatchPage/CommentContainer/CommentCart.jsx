/* eslint-disable react/prop-types */
import { FaCircleUser } from "react-icons/fa6";
import { Wrapper } from "./Style";

const CommentCart = ({ data }) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", marginBottom: 5 }}>
        <FaCircleUser size={38} />
        <div style={{ marginLeft: 10 }}>
          <span style={{ fontWeight: "bold" }}>@{data.username}</span>
          <div>{data.comment}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CommentCart;
