import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import array from "./FifteyStates";
import programmingLanguages from './ProgrammingLanguages';

const StyledDiv = styled.div`
background-image : linear-gradient(45deg, lightseagreen 0%,lightskyblue 25%,lightblue 50%,whitesmoke 100%);
height : 100vh;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
div {
    border : 2px solid black;
    width : 75%;
    height : 70%;
    background-color : azure;

}
img {
    width : 50px;
}
`
const iconUrl = "https://static.thenounproject.com/png/2500459-200.png";

export default function Form(props) {
    const { disabled, setDisabled, formData, setFormData, formError, setFormError, change } = props;
    const { fname, email, lname, username, password, terms, language, state } = formData;
    return (
        <StyledDiv>
            <h1>Sign Up Form<img src = {iconUrl} /></h1>
            <div>
                <form>
                    <label htmlFor='fname'>First Name :</label>
                    <input id="fname" name="fname" placeholder='first name'
                        type="text" value={fname} onChange={change} />

                    <label htmlFor='lname'>Last Name :</label>
                    <input id="lname" name="lname" value={lname}
                        onChange={change} type='text' placeholder='last name' />

                    <label htmlFor='username'>Username :</label>
                    <input id="username" name="username"
                        onChange={change} value={username} type="text"
                        placeholder='username' />

                    <label htmlFor='email'>Email :</label>
                    <input id="email" name="email"
                        value={email} onChange={change} type='text'
                        placeholder='email' />

                    <label htmlFor='password'>Password</label>
                    <input id="password" name="password" placeholder='password'
                        value={password} type="password" onChange={change} />

                    <label htmlFor='lanuage'>What is your favorite programming language? </label>
                    <select onChange={change} value={language} id="language" name="language">
                        <option value="">--Select One--</option>
                        {programmingLanguages.map((lang, i) => {
                            return <option value={lang} key={i}>{lang}</option>
                        })}
                    </select>

                    <label htmlFor='state'>What state are you from?</label>
                    <select id="state" value={state} onChange={change} name="state">
                        <option value="">--Select One--</option>
                        {array.map((state, i) => {
                            return <option key={i} value={state.name}>{state.name}</option>
                        })}
                    </select>


                    <button disabled={disabled}>Submit</button>
                </form>
            </div>
        </StyledDiv>
    )
}