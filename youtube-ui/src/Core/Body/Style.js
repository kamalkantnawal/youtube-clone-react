import styled from "styled-components";

export const ButtonListDiv = styled.div`
  .button {
    background-color: #fff;
    margin-right: 8px;
    border-radius: 12px;
  }
  .button:hover {
    transform: scale(1.1);
  }
  .button.active {
    background-color: #dddddd;
    pointer-events: none;
  }
`;
export const VideoContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const VideoCardDiv = styled.div`
  .video-card {
    padding: 5px;
    width: 340px;
    height: 280px;
  }
  .thumbnail {
    border-radius: 12px;
  }
  iframe {
    width: 320px;
    height: 180px;
    border-radius: 12px;
    margin: 10px;
  }
`;
