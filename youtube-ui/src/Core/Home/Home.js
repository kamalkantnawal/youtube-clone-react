import { styled } from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
  position: relative;
  .layout {
    width: 100%;
    height: calc(100% - 40px);
    position: relative;
    display: flex;
    border: 1px solid red;
  }
  .sidebar {
    width: 170px;
    height: 100%;
    border-right: 1px solid var(--border);
    border: 1px solid blue;
  }
  .content {
    width: calc(100% - 170px);
    height: 100%;
    position: relative;
    overflow: auto;
    // padding: 20px 10px;
    border: 1px solid green;
  }
`;
