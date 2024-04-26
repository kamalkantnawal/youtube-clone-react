import { styled } from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  // border: 1px solid black;
  position: relative;
  overflow: hidden;
  .layout {
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
    display: flex;
    // border: 1px solid red;
  }
  .sidebar {
    width: 170px;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
    // border-right: 1px solid var(--border);
    // border: 1px solid blue;
  }
  .content {
    width: calc(100% - 170px);
    height: 100%;
    position: relative;
    overflow: auto;
    // padding: 20px 10px;
    // border: 1px solid green;
  }
`;
