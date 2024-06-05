import { Button } from "antd";
import { ButtonListOptions } from "../../../../Core/Constants";
import { ButtonListDiv } from "../../Style";
import { useState } from "react";

const ButtonList = () => {
  const [active, setActive] = useState("all");

  return (
    <ButtonListDiv>
      {ButtonListOptions.map((item, key) => {
        return (
          <Button
            className={active === item.key ? "button active" : "button"}
            key={key}
            onClick={() => setActive(item.key)}
          >
            {item.label}
          </Button>
        );
      })}
    </ButtonListDiv>
  );
};

export default ButtonList;
