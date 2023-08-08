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
            {userInfo[0].fname}
        </div>
    )
}