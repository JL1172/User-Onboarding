import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import array from "./FifteyStates";
import programmingLanguages from './ProgrammingLanguages';

const red = { color: "rgb(207, 123, 123)" }

const StyledDiv = styled.div`
background-image : linear-gradient(45deg, lightseagreen 0%,lightskyblue 25%,lightblue 50%,whitesmoke 100%);
height : 120vh;
display : flex;
flex-direction : column;
justify-content : space-evenly;
align-items : center;
h1 {
    opacity : .75;
}
div {
    border-radius : 15px;
    width : 40%;
    min-height : 70%;
    max-height : fit-content;
    background-color : azure;
    padding : 2rem;
    form {
       display : flex;
       flex-direction : column; 
       align-items : center;
       justify-content : space-evenly;
       input {
        margin-bottom : 2rem;
        border-radius : 5px;
        border : 1px solid lightseagreen;
        &:focus {
            outline : 1px solid lightseagreen;
        }
       }
       
       label:nth-of-type(1){
            margin-top : 1rem;
       }
       label:nth-of-type(7) {
        margin-top : 1rem;
       }
       label:nth-of-type(8) {
        margin-top : 1rem;
       }
       select {
        margin-top : 1rem;
        border : 1px solid lightseagreen;
        border-radius : 5px;
       }
       input:nth-of-type(7) {
        padding-right : 3rem;
        padding-left : 3rem;
        padding-top : .3rem;
        padding-bottom : .3rem;
        outline : ${props => props.disabled ? "none" : "2px solid lightseagreen"};
        border-radius : 7px;
        box-shadow : ${props => props.disabled ? "none" : "2px 2px 2px lightsteelblue"};
        background-color : lightblue;
        color : white;
        border : none;
        &:hover {
            background-color : ${props => props.disabled ? "lightblue" : "white"};
            color : ${props => props.disabled ? "white" : "lightblue"};
            box-shadow : none;
            outline-offset : ${props => props.disabled ? "none" : "4px"};
        }
        &:active {
            outline-offset : 8px;
        }
       }
    }
}
img {
    width : 50px;
    opacity : .75;
}
`
const iconUrl = "https://static.thenounproject.com/png/2500459-200.png";

export default function Form(props) {
    const { disabled, setDisabled, formData, setFormData, formError, setFormError, change, submit } = props;
    const { fname, email, lname, username, password, terms, language, state } = formData;
    return (
        <StyledDiv disabled={disabled}>
            <h1>Sign Up Form<img src={iconUrl} /></h1>
            <div>
                <form onSubmit={submit}>
                    <label htmlFor='fname'>First Name :</label>
                    <input id="fname" name="fname" placeholder='first name'
                        type="text" value={fname} onChange={change} />
                    {formError.fname && <p style={red}>*{formError.fname}</p>}


                    <label htmlFor='lname'>Last Name :</label>
                    <input id="lname" name="lname" value={lname}
                        onChange={change} type='text' placeholder='last name' />
                    {formError.lname && <p style={red}>*{formError.lname}</p>}

                    <label htmlFor='username'>Username :</label>
                    <input id="username" name="username"
                        onChange={change} value={username} type="text"
                        placeholder='username' />
                    {formError.username && <p style={red}>*{formError.username}</p>}

                    <label htmlFor='email'>Email :</label>
                    <input id="email" name="email"
                        value={email} onChange={change} type='text'
                        placeholder='email' />
                    {formError.email && <p style={red}>*{formError.email}</p>}

                    <label htmlFor='password'>Password</label>
                    <input id="password" name="password" placeholder='password'
                        value={password} type="password" onChange={change} />
                    {formError.password && <p style={red}>*{formError.password}</p>}

                    <label htmlFor='lanuage'>What is your favorite programming language? </label>
                    <select onChange={change} value={language} id="language" name="language">
                        <option value="">--Select One--</option>
                        {programmingLanguages.map((lang, i) => {
                            return <option value={lang} key={i}>{lang}</option>
                        })}
                    </select>
                    {formError.language && <p style={red}>*{formError.language}</p>}

                    <label htmlFor='state'>What state are you from?</label>
                    <select id="state" value={state} onChange={change} name="state">
                        <option value="">--Select One--</option>
                        {array.map((state, i) => {
                            return <option key={i} value={state.name}>{state.name}</option>
                        })}
                    </select>
                    {formError.state && <p style={red}>*{formError.state}</p>}

                    <label htmlFor='terms'>Terms and Conditions</label>
                    <input id="terms" type='checkbox' name="terms"
                        checked={terms} onChange={change} />
                    {formError.terms && <p style={red}>*{formError.terms}</p>}

                    <input type="submit" disabled={disabled}></input>
                </form>
            </div>
        </StyledDiv>
    )
}