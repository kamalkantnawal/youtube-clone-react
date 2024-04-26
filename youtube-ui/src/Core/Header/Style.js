import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  // padding: 0 5px;
  .leftSide {
    grid-column: span 2;
  }
  .searchBar {
    grid-column: span 8;
    display: flex;

    .icon {
      // position: absolute;
      // margin: 0 875px;
      // padding: 5px 5px;
    }
  }
  . rightSide {
    grid-column: span 2;
  }
  .round-right {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .round-left {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;
