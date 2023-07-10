import styled from "@emotion/styled";

import { ListNames } from '../components/ListNames';
import { InfoButton } from '../components/InfoButton'
import { Button } from '../components/Button'

import { users } from '../data/users'

const MainContainer = styled.div`
  width: 100%; 
  height: 100%;
  display: flex; 
  flex-direction : column;
`

const HeaderGameCointaner = styled.div`
  width: 100% ;
  display: flex;
  justify-content: center;
  alignItems: center; 
  flex-direction : row; 
`

const LogoContainer = styled.div`
 padding-top: 50px; 
 padding-right : 150px;
 padding-left :150px;
 display : flex;
 flex-direction : row; 
 justify-content : space-between;
`

const CentralContainer = styled.div`
  display : flex; 
  flex-direction : column;
  width : calc(100% - 800px);
`

const SeparatorContainer = styled.div`
  display : flex;
  flexDirection : row;
`

const SeparatorImage = styled.div`
  display : flex; 
  justify-content : center; 
  align-items: center; 
  flex-direction : column; 
  margin-top: 30px;
`

const FlexGrow1 = styled.div`
  flex-grow: 1;
`

const FlexGrow3 = styled.div`
  flex-grow: 1;
  margin-left : 10;
`

export const GamePage = () => {

  return (
    <MainContainer >
      <HeaderGameCointaner> 
        <img src="/squid-game-image-without-background.png" style={{ width : 290}}/>
      </HeaderGameCointaner>
      <LogoContainer>
         <ListNames 
            title="Participantes"
            persons={users}
          />
          <CentralContainer>
            <SeparatorContainer >
              <FlexGrow1 >
               <InfoButton title='Round' value='01'/>
              </FlexGrow1>
              <FlexGrow3  >
               <InfoButton title='Fundos do prêmio' value='RS156.000.000,00' /> 
              </FlexGrow3>
            </SeparatorContainer>
            <SeparatorImage>
              <img src='/red-man.svg' style={{ width : 220}}/>
              <Button value='Iniciar' name='Iniciar'/>
            </SeparatorImage>
            <div style={{ marginTop: 40}}>
            <InfoButton title='Fundos do prêmio' value='RS156.000.000,00' /> 
            </div>
          </CentralContainer>
           <ListNames 
            title="Participantes"
            persons={users}
          />
      </LogoContainer>
    </MainContainer>
    );
};
