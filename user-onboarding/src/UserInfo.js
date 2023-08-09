import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap, {Card,CardBody,CardTitle} from "reactstrap";
import styled from 'styled-components';
import { StyledDiv, StyledButton } from "./StyledComponents";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const style = {
    fontWeight : 'bold',
}

const Div = styled.div`
background-image : linear-gradient(45deg,lightseagreen,lightskyblue,lightblue,whitesmoke);
height : 97vh;
display : flex;
justify-content : ${props => props.collapse ? "flex-start" : "center"};
align-items : ${props => props.collapse ? "flex-end" : "center"};
div {
    padding : 1rem;
    background-color : whitesmoke;
    border-radius : 10px;
}

div:nth-of-type(2),
div:nth-of-type(3),
div:nth-of-type(4),
div:nth-of-type(5),
div:nth-of-type(6),
div:nth-of-type(7) {
    display : ${props => props.collapse ? "none" : "flex"};
}
div:nth-of-type(2):hover {
    color : royalblue;
}
div:nth-of-type(3):hover {
    color : royalblue;
}
div:nth-of-type(4):hover {
    color : royalblue;
}
div:nth-of-type(5):hover {
    color : royalblue;
}
div:nth-of-type(6):hover {
    color : royalblue;
}
div:nth-of-type(7):hover {
    color : royalblue;
}
`
const up = "https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Collaps_accordion-512.png";
const down = "https://cdn0.iconfinder.com/data/icons/leading-international-corporate-website-app-collec/16/Expand_menu-512.png";
const imgStyle = {height : "20px"}

export default function UserInfo(props) {
    const {formData,setUserInfo,userInfo,setCollapse,collapse} = props;
    const status = collapse ? "Press to expand" : "Press to collapse";
    const imgChoice = collapse ? <img style = {imgStyle} src = {up} /> : <img style = {imgStyle} src = {down} />;
    const expandOrCollapse = evt => {
        setCollapse(!collapse)
    }
    return (
        <Div collapse = {collapse}>
            <div>
            <Card>
                <div style = {style} onClick={expandOrCollapse}>{status}{imgChoice}</div>
                {userInfo[0].fname && userInfo.lname && <CardTitle>Name : {userInfo[0].fname} {userInfo[0].lname}</CardTitle>}
                { userInfo[0].email && <CardTitle>Email : {userInfo[0].email} </CardTitle>}
                { userInfo[0].username && <CardTitle>Username : {userInfo[0].username}</CardTitle>}
                { userInfo[0].language && <CardTitle>Favorite Programming Language : {userInfo[0].language}</CardTitle>}
                { userInfo[0].state && <CardTitle>Location : {userInfo[0].state}</CardTitle>}
            </Card>
            </div>
        </Div>
    )
}