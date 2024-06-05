import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 4px;
  margin: 4px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  .left-nav {
    grid-column: span 1;
  }
  .mid-nav {
    grid-column: span 10;
    place-self: center;

    .button {
      border: 0.3px solid grey;
      border-top-right-radius: 16px;
      border-bottom-right-radius: 16px;
      padding: 6px;
    }
  }
  .right-nav {
    grid-column: span 1;
  }
`;
export const SearchDiv = styled.div`
  display: flex;
  .search {
    border: 0.3px solid #d3d0d0;
    width: 40vw;
    border-top-left-radius: 16px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 16px;
    margin-bottom: 5px;
  }
  .button {
    width: 100px;
    border-top-left-radius: 0px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 0;
  }
`;
export const IMG = styled.img`
  height: 48px;
  cursor: pointer;
`;
