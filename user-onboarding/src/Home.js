import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import {StyledDiv,StyledButton} from "./StyledComponents";
import {Routes,Route,Link,useNavigate} from "react-router-dom";
import Form from './Form';

const menuUrl = "https://static.thenounproject.com/png/4572821-200.png";
const iconUrl = "https://static.thenounproject.com/png/2500459-200.png";

function Home() {
  const navigate = useNavigate();
  const nav = ()=> {
    navigate("/form")
  }
  return (
    <StyledDiv>
      <div>
        <img src = {iconUrl} />
        <h1>Smart Tracker</h1> 
        <h4>A simple road to financial peace</h4>
      </div>
      <div>
        <h1 style = {{marginRight : "-7rem"}}>Login Here</h1>
        <StyledButton  data-cy = "login" onClick={nav}>Login</StyledButton>
      </div>
    </StyledDiv>
  );
}

export default Home;