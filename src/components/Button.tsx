import React from "react";
import styled from "@emotion/styled";

interface ButtonProps{
    value: string
    name: string
}

const CustomButton = styled.button<ButtonProps>`
 min-width : 190px;
 background-color: #ED1B76;
 border: none;
 padding: 10px;
 border-radius: 8px; 
 margin-top: 1px;
 color: #fff;
 cursor: pointer;


 `

export const Button: React.FC<ButtonProps> = ({
    value,
    name,
}) => {
    return (
        <CustomButton value={value} name={name}> {value}</CustomButton>
    )
}
