import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .layout {
    width: 100%;
    height: calc(100% - 52px);
    display: flex;
    background-color: light-pink;
    .sidebar {
      width: ${({ flag }) => (flag ? "170px" : "50px")}
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
      transition: width 0.3s;
    }
    .content {
      width: ${({ flag }) =>
        flag ? "calc(100% - 170px)" : "calc(100% - 50px)"}
      height: 100%;
      transition: width 0.3s;
    }
  }
`;
