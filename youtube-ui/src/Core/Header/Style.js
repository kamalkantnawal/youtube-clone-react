import styled from "styled-components";

export const Wrapper = styled.div`
  // position: fixed;
  // top: 0;
  // z-index: 5;
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
    padding-left: 15px;
  }
  .button {
    width: 80px;
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
export const Autocomplete = styled.div`
  position: fixed;
  background-color: #fff;
  width: 40vw;
  border-radius: 12px;
  z-index: 5;
  font-weight: bold;
  padding-left: 10px;
  cursor: pointer;
  border: 0.5px solid #f1e9e9;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  .li {
    margin: 5px;
    padding: 5px;
  }
  .li:hover {
    overflow: auto;
    background-color: #dfdfdf;
  }
`;
