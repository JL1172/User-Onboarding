import React, {useState, useEffect} from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';

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
`

export default function Form(props) {
   const {disabled,setDisabled,formData,setFormData,formError,setFormError,change} = props;
   const {fname,email,lname,username,password,terms,language,state} = formData;
    return (
        <StyledDiv>
           <div>
                <form>
                    <label htmlFor='fname'>First Name :</label>
                    <input id = "fname" name = "fname" placeholder='first name'
                    type = "text" value = {fname} onChange={change} />

                    <button disabled = {disabled}>Submit</button>
                </form>
           </div>
        </StyledDiv>
    )
}