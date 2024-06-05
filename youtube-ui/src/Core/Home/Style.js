import { styled } from "styled-components";
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
      width: 170px;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
    }
    .content {
      width: calc(100% - 170px);
      height: 100%;
    }
  }
`;
