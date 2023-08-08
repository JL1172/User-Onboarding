import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import {keyframes} from 'styled-components';

const kf = keyframes`
50% {
    opacity : 0;
}
100% {
    opacity : .75;
}
`
const kf2 = keyframes`
0% {
    background-position : 0% 50%;
}
50% {
    background-position : 100% 50%;
} 
100% {
    background-position : 190% 50%;
}
`


const StyledDiv = styled.div`
height : 100vh;
width : 100%;
background-image : linear-gradient(-45deg, lightseagreen,lightskyblue,lightblue,whitesmoke);
background-size: 150% 150%;
display : flex;
justify-content : space-around;
align-items : center;
animation : ${kf2} 2s ease-in-out forwards;
img {
    height : 50px;
}
div:nth-of-type(1) {
    text-align : center;
    opacity : 0;
    animation : ${kf} 4s ease-in-out forwards;
}
div:nth-of-type(2) {
    opacity : 0;
    animation : ${kf} 4s ease-in-out forwards;
    display : flex;
    flex-direction : column;
    align-items : baseline;
    justify-content : space-between;
    h1 {
        margin-bottom : 2rem;
    }
}
`
// const Header = styled.div`
// background-color : lightcyan;
// img:nth-child(1) {
//     height : 50px;
//     opacity : .75;
//     transition : .3s ease-in-out;
//     &:active {
//         transform : rotate(90deg);
//         opacity: 1;
//         transition : .3s ease-in-out;
//     }
// }
// `
const StyledButton = styled.button`
border : none;
padding : .5rem;
width : 10.5vw;
border-radius : 10px;
height : 50px;
color : slategray;
box-shadow : 3px 3px 3px lightseagreen;
transition : .1s;
outline : 2px solid lightseagreen;
&:hover {
    box-shadow : none;
    outline-offset : 4px;
    transition : .1s; 
}
&:active {
    transform : scale(1.1);
    outline-offset : 5px;
}
`

export {StyledDiv,StyledButton};