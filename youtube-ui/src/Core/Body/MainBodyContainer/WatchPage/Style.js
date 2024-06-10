import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .top-left {
    width: 700px;
    width: 700px;
    height: 400px;

    position: relative;
  }
  .bottom-left {
    width: 700px;
    position: relative;
    border-radius: 12px;
    padding: 5px;
  }
  .top-right {
    border: 1px solid black;
    width: calc(100% - 780px);
    height: 400px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
    overflow: auto;
    background-color: #f2f2f2;
    border-radius: 12px;
  }
`;
export const ChatDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`;
