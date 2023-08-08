import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import ReactStrap from "reactstrap";
import styled from 'styled-components';
import { StyledDiv, StyledButton } from "./StyledComponents";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function UserInfo(props) {
    const {formData,setUserInfo,userInfo} = props;
    console.log(userInfo)
    return (
        <div>
            <div>
                <h3>Name : {userInfo[0].fname} {userInfo[0].lname}</h3>
                <h3>Email : {userInfo[0].email} </h3>
                <h3>Username : {userInfo[0].username}</h3>
                <h3>Favorite Programming Language : {userInfo[0].language}</h3>
                <h3>Location : {userInfo[0].state}</h3>
            </div>
        </div>
    )
}