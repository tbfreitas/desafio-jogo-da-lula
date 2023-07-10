import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ScreenDiv = styled.div`
  width: 100%;
  height: 100vh;
  display : flex; 
  justify-content: center; 
  align-items: center;
`

const CentralText = styled.p`
  margin: 0;
  font-size: 24px;
  color: #fff;
`


const CentralDiv = styled.div`
  border : 1px solid #fff;
  padding: 20px 30px 20px 30px; 
  border-radius: 5px;
  cursor : pointer;

  &:hover{
    background-color: #fff;
  }

  &:hover .test-class{
    color: #374151 !important;
  }
`

export const HomePage = () => {
  return (
    <ScreenDiv>
      <Link to='/game' style={{ textDecoration:"none" }}>
        <CentralDiv >
          <CentralText className="test-class">Iniciar</CentralText>
        </CentralDiv>
      </Link>
    </ScreenDiv>
  );
};
