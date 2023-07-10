import styled from "@emotion/styled";
import React from "react";

interface InfoButtonProps{
    title : string
    value : string
}

const ButtonContainer = styled.div`
 display : flex;
 padding-top: 15px;
 padding-bottom : 15px; 
 flex-direction : column; 
 background-color : #374151; 
 border-radius: 8px;
 align-items: center;
 width :98%;
`

const TextTitle = styled.div`
 margin : 0;
 font-size : 12px;
`

const TextValue = styled.div`
 margin : 0
 font-size: 22px;
 font-weight : bold;
`

export const InfoButton : React.FC <InfoButtonProps> = ({
    title,
    value, 
}) => {

    return(
        <ButtonContainer>
            <TextTitle>{title}</TextTitle>
            <TextValue>{value}</TextValue>
        </ButtonContainer>
    )
}