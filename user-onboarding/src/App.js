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
import array from "./FifteyStates";
import programmingLanguages from './ProgrammingLanguages';

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

const schema = yup.object().shape({
  fname : yup.string().matches(/^[A-za-z]*$/,"Must only be letters")
  .required("First name is required").min(3,"First name must be 3 charaters or more"),

  lname : yup.string().required("Last name is required")
  .matches(/^[A-za-z]*$/,"Must only be letters")
  .min(3,"Last name must be 3 charaters or more"),

  email : yup.string().email("Must be a valid email address").required("Email is required"),

  username : yup.string().required("Username is required")
  .min(5,"Username must be 5 characters or more")
  .matches(/[^A-Za-z]+$/,"Username must end with at least one number"),
  
  password : yup.string().matches(/[^0-9a-zA-Z]+/,"Must use at least one special character").required("Password is required"),

  terms : yup.boolean().oneOf([true],"Must agree to terms and conditions to proceed"),

  language : yup.string().oneOf(programmingLanguages, "Must pick your favorite programming language"),

  state : yup.string().oneOf(array, "Must pick your state")
})

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
const formValidation = (name,value) => {
    yup.reach(schema,name).validate(value)
    .then(()=> setFormError({...formError, [name] : ""}))
    .catch((err)=> setFormError({...formError, [name] : err.errors[0]}))
}
  const change = evt => {
    const {name,value,checked} = evt.target;
    const valueToUse = evt.target.type === "checkbox" ? checked : value;
    formValidation(name,valueToUse)
    setFormData({...formData, [name] : valueToUse})
  }
  const submit = evt => {
    evt.preventDefault();
  }
//!End of handlers
//!useEffect
useEffect(()=> {
  schema.isValid(formData).then(valid => setDisabled(!valid))
}, [formData])
//!useEffect
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
        submit = {submit}
         />} />
      </Routes>
    </div>
  )
}

export default App;
