import { ListNames } from '../components/ListNames';
import { InfoButton } from '../components/InfoButton'
import { Button } from '../components/Button'
import { randomIntFromInterval, moneyMask } from '../utils/string'
import {
  MainContainer,
  HeaderGameCointaner,
  LogoContainer,
  CentralContainer,
  SeparatorContainer,
  FlexGrow1,
  FlexGrow3,
  SeparatorImage,
  InfoButtonSeparator
} from './StyleGame';
import { users } from '../data/users'
import { useEffect ,useState } from 'react';
import { Link } from "react-router-dom";

const CHANCE_ELIMINATE = 42;
const CHANCE_VOTE_YES = 30;
const LOADING_TIME = 3000;

export const GamePage = () => {

  const [ availableUsers, setAvaialableUsers] = useState(users);
  const [ eliminatedUsers, setEliminatedUsers] = useState([]);
  const [ totalOnFund, setTotalOnFund] = useState(0)

  const [round, setRound ] = useState(1);

  const [isEliminating , setIsEliminating] = useState(false)
  const [isVoting ,setIsVoting ] = useState(false);
  const [eliminatedHappend , setEliminatedHappend ] = useState(false) 

  const [endGame, setEndGame ] = useState(false)
  const [amountSaidYes,setAmountSaidYes] = useState(0)

  const audioNewGame = new Audio("/main-theme.mp3")
  const audioNewRound = new Audio("/red-light-sound.mp3")

  useEffect(()=>{
    audioNewGame.play()
  },[])

  const onSubmit = () => {
    // its about to start the elimination
    if(!eliminatedHappend){
      audioNewGame.pause();
      audioNewRound.play();
      
      setIsEliminating(true);
      setTimeout(()=> {
        setRound(round + 1);
        const tmpSurvivor = [];
        const tmpEliminated = [];
    
        availableUsers.forEach((user) => {
          const isSurvivor = randomIntFromInterval(0,100) >= CHANCE_ELIMINATE;
          isSurvivor ? tmpSurvivor.push(user) : tmpEliminated.push(user)
        })
    
        const total = totalSum([...eliminatedUsers, ...tmpEliminated])
      
        if(tmpSurvivor.length == 0) setEndGame(true)
        setAvaialableUsers(tmpSurvivor.map(tl => ({...tl,value : parseFloat(( 420000 + total/tmpSurvivor.length).toFixed(2)) })));
        setEliminatedUsers([...eliminatedUsers, ...tmpEliminated.map(tl => ({...tl,value : 0}) )])
      
        setTotalOnFund(total);
        setIsEliminating(false);
        setEliminatedHappend(true)
        
      }, LOADING_TIME);
    } else {
          
      // its about to start the voting
      const tmp = availableUsers.map((user) => {
        const votedYes = randomIntFromInterval(0,100) <= CHANCE_VOTE_YES;
        return {...user, vote: votedYes}
      })
      const saidYes = tmp.filter(p => p.vote).length;
      setAvaialableUsers(tmp);
      setIsVoting(true);
      setTimeout(()=> {
        setIsVoting(false);
        setEliminatedHappend(false);
        setAmountSaidYes(saidYes);
        if((saidYes/tmp.length) >= 0.5) {
          setEndGame(true);
        }
      }, LOADING_TIME)
    }
  }

  const totalSum = (value) => {
    return value.length * 420000;
  }

  return (
    <MainContainer >
      <HeaderGameCointaner> 
        <img src="/squid-game-image-without-background.png" style={{ width : 290}}/>
      </HeaderGameCointaner>
      <LogoContainer>
         <ListNames
            isVoting={isVoting} 
            title="Participantes"
            persons={availableUsers}
          />
          <CentralContainer>
            <SeparatorContainer >
              <FlexGrow1 >
               <InfoButton title='Round' value={JSON.stringify(round)}/>
              </FlexGrow1>
              <FlexGrow3  >
               <InfoButton title='Fundos do prêmio' value={moneyMask(JSON.stringify(totalOnFund))} /> 
              </FlexGrow3>
            </SeparatorContainer>
            <SeparatorImage>
              <img src='/red-man.svg' style={{ width : 220}}/>
              {endGame ? (
                <Link to='/' style={{ textDecoration:"none" }}>
                  <Button 
                      isVoting={isVoting}
                      isEliminating={isEliminating} 
                      value='Finalizar jogo' 
                      name='Iniciar' 
                      onClick={()=> {}} 
                    />
                </Link>      
              ):(
                <Button 
                  isVoting={isVoting}
                  isEliminating={isEliminating} 
                  value={isEliminating
                      ? 'Eliminando' : isVoting 
                        ? 'Votando' : eliminatedHappend 
                          ? 'Votar' : 'Iniciar Rodada'
                  } 
                  name='Iniciar' 
                  onClick={()=> onSubmit()} 
                />
              )}
            </SeparatorImage>
            <InfoButtonSeparator style={{ marginTop: 40}}>
              <InfoButton title='Votos para o fim do jogo' value={JSON.stringify(amountSaidYes)} /> 
            </InfoButtonSeparator>
          </CentralContainer>
           <ListNames
            isVoting={isVoting}
            title="Participantes Eliminados"
            persons={eliminatedUsers}
          />
      </LogoContainer>
    </MainContainer>
    );
};
