import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;

  .layout {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;

    .sidebar {
      width: ${({ flag }) => (flag ? "100px" : "200px")};
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
      transition: width 0.3s;
    }

    .content {
      width: ${({ flag }) => `calc(100% - ${flag ? "100px" : "200px"})`};
      height: 100%;
      position: relative;
      
      padding: ${({ bodymarginoff }) => (bodymarginoff ? "20px 10px" : 0)}
      margin: ${({ bodymarginoff }) => (bodymarginoff ? "15px" : 0)}
      // padding: 20px 10px;
      transition: width 0.3s;
      // margin: 15px;
      overflow: auto;
    }
  }
`;
