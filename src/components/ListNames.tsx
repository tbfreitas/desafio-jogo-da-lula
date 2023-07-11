import React from "react";
import { moneyMask }  from '../utils/string';
import styled from "@emotion/styled";

interface Person{
    name : string
    urlAvatar : string
    value : number
    vote: boolean
}

interface ListNameProps {
    persons : Person[]
    title : string
    isVoting : boolean
    isAvailableUsers: boolean
}

const GameContainer = styled.div`
 padding: 12px;
 width : 348px;
 background-color: #374151; 
 borderRadius: 8px;  
 height : 433px;
`

const HeaderGamerContainer = styled.div`
 display : flex; 
 flex-direction: row;  
 justify-content : space-between; 
 margin-top: 20px; 
 margin-bottom: 20px;
`

const Title = styled.p`
 margin: 0px; 
 font-size : 16px;
 fontWeight : bold;
`

const Number = styled.p`
 margin: 0px; 
 font-size : 16px
`

const ContainerNames = styled.div`
 overflow : scroll; 
 width : 100%; 
 height: 370px;
`

const PersonInfo = styled.div`
 display : flex; 
 font-size : 14px; flex-direction : row;
 align-items:center; 
 justify-content: space-between; 
 border-bottom : 1px solid #fff;
`

const PersonDataInfo = styled.div`
 display : flex;
 flex-direction : row; 
 align-items : center;
`

interface AvatarContainerProps {
    urlAvatar: string
}

const AvatarContainer = styled.div<AvatarContainerProps>`
 width: 26px;
 height: 26px;
 border-radius: 50px; 
 background-image: ${(props) => `url(${props.urlAvatar})`};
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
`

const Name = styled.div`
 margin-left : 10px;
`

const MoneyContainer = styled.div``

const Money = styled.p`
`

export const ListNames :React.FC<ListNameProps> = ({
    persons,
    title,
    isVoting,
    isAvailableUsers
}) => {
    return (
        <GameContainer >
            <HeaderGamerContainer >
                <Title style={{ margin: 0, fontSize : 16 }}>{title}</Title>
                <Number >{persons.length}/69</Number>
            </HeaderGamerContainer>
            <ContainerNames >
                {persons.map((p) => {
                    return(
                    <PersonInfo>
                        <PersonDataInfo >
                            <AvatarContainer urlAvatar={p.urlAvatar}/>
                            <Name>{p.name}</Name>
                        </PersonDataInfo>
                        <MoneyContainer>
                            <Money>{!isAvailableUsers
                             ? moneyMask(JSON.stringify(p.value)) : isVoting 
                                ? p.vote ? 'SIM' : 'NÃO' 
                                : moneyMask(JSON.stringify(p.value))}
                            </Money>
                        </MoneyContainer>
                    </PersonInfo>
                )}
            )}
            </ContainerNames>
        </GameContainer>
    )
};
  