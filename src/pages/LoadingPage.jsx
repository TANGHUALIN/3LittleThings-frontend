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
        const token = await verifyAPI(temptoken);
        if (token) {
          setToken(token)
          navigate('/diary');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [temptoken, navigate]);

  return (
    <div>Loading...</div>
  );
}

export default LoadingPage;
