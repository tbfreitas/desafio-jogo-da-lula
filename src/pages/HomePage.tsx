import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ScreenDiv = styled.div`
  width: 100%;
  height: 100vh;
  display : flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center;
`

const CentralText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #fff;
`


const CentralDiv = styled.div`
  padding: 20px 30px 20px 30px; 
  border-radius: 5px;
  cursor : pointer;
  background-color: #ED1B76;

  &:hover{
    background-color: #fff;
  }

  &:hover .test-class{
    color: #ED1B76 !important;
  }
`

export const HomePage = () => {
  return (
    <ScreenDiv>
      <img src="/squid-game-image-without-background.png" style={{ width : 490}}/>
      <Link to='/game' style={{ textDecoration:"none" }}>
        <CentralDiv >
          <CentralText className="test-class">Iniciar</CentralText>
        </CentralDiv>
      </Link>
    </ScreenDiv>
  );
};
