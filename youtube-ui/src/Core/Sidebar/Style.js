import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 20px;
`;
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  .list-item {
    padding-right: 10px;
    font-size: ${({ flag }) => (flag ? "18px" : "28px")};
  }
`;
