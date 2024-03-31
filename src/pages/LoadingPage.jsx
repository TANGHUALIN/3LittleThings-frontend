import React, { useState, useEffect } from 'react';
import { getToken } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { fetchLogin } from '../store/modules/user';
import { useDispatch, useSelector } from 'react-redux';

function LoadingPage() {
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const params=useParams()
  const temptoken=params.temptoken
  console.log("temptoken",temptoken)
  useEffect(()=>{
  dispatch(fetchLogin(temptoken))
  })
  const uid=useSelector(state=>state.user.uid)
  useEffect(() => {
    if (uid) {
      navigate('/diary');
    }
  }, [uid, navigate]);
  return (
    <div>Loading...</div>
  );
}


export default LoadingPage;
