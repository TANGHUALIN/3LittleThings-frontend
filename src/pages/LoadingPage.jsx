import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyAPI } from '../apis/userAPI';
import { setToken } from '../utils';

function LoadingPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { temptoken } = params;
  
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await verifyAPI(temptoken)
        console.log("res in loading",data)
        const token=data.headers['authorization'].split(' ')[1]
        console.log(token)
        if (token) {
          console.log("token in loading1",token)
          setToken(token)
          navigate('/diary')
        }
      } catch (error) {
        console.log("error",error)
        navigate('/')
      }
    }
    fetchToken()
  }, [temptoken])

  

  return (
    <div>Loading...</div>
  );
}

export default LoadingPage;
