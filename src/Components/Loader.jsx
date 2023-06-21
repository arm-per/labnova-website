import styled from "styled-components";

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #aaa;
  border-left: 10px solid #9CC632;
  animation: loader 1s infinite linear;
  opacity: .5;
  margin-inline: auto;
  margin-block: 50px;
  
  @keyframes loader{
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg);
    }
  }
`
