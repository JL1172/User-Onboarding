import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import { StyledDiv, StyledButton } from "./StyledComponents";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Form from './Form';
import Home from "./Home";
import newArray from "./FifteyStates";
import programmingLanguages from './ProgrammingLanguages';
import UserInfo from './UserInfo';

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
const styleForLink = {color : "black", textDecoration : "none"}
const Styled = styled.div`
display : flex;
justify-content : baseline;
a {
  margin-right : 3rem;
  font-size : 20px;
  opacity : .75;
}
a:nth-of-type(2):hover {
    border-bottom : 1px solid black;
    transform : scale(1.1);
}
`

const schema = yup.object().shape({
  fname: yup.string().matches(/^[A-za-z]*$/, "Must only be letters")
    .required("First name is required").min(3, "First name must be 3 characters or more"),

  lname: yup.string().required("Last name is required")
    .matches(/^[A-za-z]*$/, "Must only be letters")
    .min(3, "Last name must be 3 characters or more"),

  email: yup.string().email("Must be a valid email address").required("Email is required"),

  username: yup.string().required("Username is required")
    .min(5, "Username must be 5 characters or more")
    .matches(/[^A-Za-z]+$/, "Username must end with at least one number"),

  password: yup.string().required("Password is required").min(6, "Must be 6 or more in length")
    .matches(/[^0-9a-zA-Z]+/, "Must use at least one special character"),

  terms: yup.boolean().oneOf([true], "Must agree to terms and conditions to proceed"),

  language: yup.string().oneOf(programmingLanguages, "Must pick your favorite programming language"),

  state: yup.string().oneOf(newArray, "Must pick your state")
})
const initialValue = {fname: "",
lname: "",
username: "",
email: "",
password: "",
terms: false,
language: "",
state: "",}

function App() {
  //!These are the slices of state
  const [collapse,setCollapse] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [formData, setFormData] = useState(initialValue)
  const [count,setCount] = useState(0);
  const [select,setSelect] = useState(false);
  const [isVisible,setIsVisible] = useState(false);
  const [formError, setFormError] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    terms: "",
    language: "",
    state: "",
  })
  //!End of slices of state
  //!Below are the handlers
  const formValidation = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormError({ ...formError, [name]: "" }))
      .catch((err) => setFormError({ ...formError, [name]: err.errors[0] }))
  }
  const change = evt => {
    const { name, value, checked } = evt.target;
    const valueToUse = evt.target.type === "checkbox" ? checked : value;
    formValidation(name, valueToUse)
    setFormData({ ...formData, [name]: valueToUse })
  }
  const navigate = useNavigate();
 
  const submit = evt => {
    evt.preventDefault();
    if (count < 1) {
      setCount(count + 1)
    const newUser = {
      fname: formData.fname.trim(), lname: formData.lname.trim(), username: formData.username.trim(), email: formData.email.trim(),
      password: formData.password.trim(), terms: formData.terms, language: formData.language, state: formData.state
    }
    axios.post("https://reqres.in/api/users", newUser)
      .then((res)=> {
        setUserInfo([res.data,...userInfo])
        navigate("user")
        setIsVisible(isVisible => isVisible = true)
        setSelect(select=> select = true)
      })
      .catch((err)=> {
        console.error(err)
      })
      .finally(()=> {
        setFormData(initialValue);
      })
    } 
  }
  //!End of handlers
  //!useEffect
  useEffect(() => {
    if (count === 1) {
      setDisabled(disabled=> disabled=true)
    } else {
    schema.isValid(formData).then(valid => setDisabled(!valid))
    }
  }, [formData])
  //!useEffect
  return (
    <div>
      <Styled>
      <Link to="/"><ImgStyle data-cy = "menuIcon"src={menuUrl} /></Link>
      {isVisible && <Link data-cy = "userLink" style={styleForLink} to = {`user`}>User {userInfo.fname}</Link>}
      </Styled>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form
          disabled={disabled}
          setDisabled={setDisabled}
          formData={formData}
          setFormData={setFormData}
          formError={formError}
          setFormError={setFormError}
          change={change}
          submit={submit}
          select = {select}
        />} />
        <Route path = "user" element = {<UserInfo 
        collapse = {collapse} setCollapse = {setCollapse}
        userInfo = {userInfo}
         setUserInfo = {setUserInfo} formData = {formData}
        />}/>
        {/* <Route path = "user/:id" element = {<UserInfo
        formData={formData}
        userInfo = {userInfo} setUserInfo = {setUserInfo}  />} /> */}
      </Routes>
    </div>
  )
}

export default App;
