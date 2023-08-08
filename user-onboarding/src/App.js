import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import {StyledDiv,StyledButton} from "./StyledComponents";
import {Routes,Route,Link,useNavigate} from "react-router-dom";
import Form from './Form';
import Home from "./Home";

const menuUrl = "https://static.thenounproject.com/png/4572821-200.png";
const iconUrl = "https://static.thenounproject.com/png/2500459-200.png";
const ImgStyle = styled.img`
  height : 35px;
  margin-left : 1rem;
  transition : .2s ease-in-out;
  opacity : .70;
  &:active {
    transform: rotate(90deg);
    opacity : 1;
  }
`

function App() {
//!These are the slices of state
  const [disabled,setDisabled] = useState(true);
const [formData,setFormData] = useState({
    fname : "",
    lname : "",
    username : "",
    email : "",
    password : "",
    terms : false,
    language : "",
    state : "",
})
const [formError,setFormError] = useState({
    fname : "",
    lname : "",
    username : "",
    email : "",
    password : "",
    terms : "",
    language : "",
    state : "",
})
//!End of slices of state
//!Below are the handlers
  const change = evt => {
    const {name,value,checked} = evt.target;
    const valueToUse = evt.target.type === "checkbox" ? checked : value;
    setFormData({...formData, [name] : valueToUse})
  }
//!End of handlers
  return (
    <div>
      <Link to = "/"><ImgStyle src = {menuUrl} /></Link>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "form" element = {<Form 
        disabled = {disabled}
        setDisabled = {setDisabled}
        formData = {formData} 
        setFormData = {setFormData}
        formError = {formError}
        setFormError = {setFormError}
        change = {change}
         />} />
      </Routes>
    </div>
  )
}

export default App;
