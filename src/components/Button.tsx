import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";


const CustomButton = styled.button<CustomButtonProps>`
 min-width : 190px;
 background-color:${(props)=> props.isEliminating || props.isVoting ? '#bbb': '#ED1B76'};
 border: none;
 padding: 10px;
 border-radius: 8px; 
 margin-top: 1px;
 color: #fff;
 cursor: pointer;
 `

 interface CustomButtonProps{
    value: string
    name: string
    onClick: MouseEventHandler,
    isEliminating: boolean
    isVoting: boolean
}


export const Button: React.FC<CustomButtonProps> = ({
    value,
    name, 
    onClick,
    isEliminating,
    isVoting
}) => {
    return (
        <CustomButton isVoting={isVoting} isEliminating={isEliminating} disabled={isEliminating || isVoting} value={value} name={name} onClick={onClick}> {value}</CustomButton>
    )
}
