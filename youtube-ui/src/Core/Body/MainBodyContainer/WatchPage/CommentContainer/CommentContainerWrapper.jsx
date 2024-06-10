/* eslint-disable react/prop-types */

import CommentCart from "./CommentCart";
import { data as initialData } from "./CommentData";

const CommentContainer = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <CommentCart data={item} />
          {item.reply && item.reply.length > 0 && (
            <div style={{ marginLeft: 50, borderLeft: "1px solid black" }}>
              <CommentContainer data={item.reply} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentContainerWrapper = () => {
  return (
    <div>
      Comments
      <CommentContainer data={initialData} />
    </div>
  );
};

export default CommentContainerWrapper;
