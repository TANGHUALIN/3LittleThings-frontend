import {useTranslation} from "react-i18next"
import {useState,useRef } from "react";
import React from "react";
import i18n from "../i18n/i18n";
import classNames from "classnames";
import { Form,Button,Input,ConfigProvider} from "antd";
import { MailOutlined,KeyOutlined,EyeInvisibleOutlined, EyeTwoTone  } from "@ant-design/icons";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignupBox from "./SignupBox";
import AlertBox from "./AlertBox";
import { useQuery } from "@tanstack/react-query";
import { setToken } from "../utils";
import { useQueryClient } from '@tanstack/react-query';
import { fetchTokenWhenLogin } from "../queryFN/userFN";
import { loginAPI } from "../apis/userAPI";

const LoginBox = ({showSignupBox,showFindPassword}) => {
  
    const { t } = useTranslation()
    const navigate=useNavigate()
    const [status, setStatus] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [detailedMsg, setDetailedMsg] = useState("");
    const queryClient=useQueryClient()
    const onFinish=async(value)=>{
      try{
        console.log(value)
        const data=await loginAPI(value)
        const token=data.headers['authorization'].split(' ')[1]
        console.log(token)
        setToken(token)
        navigate('/diary')
      }catch (error) {
        console.log(error)
        const statusCode = error.response.status
        setStatus(parseInt(statusCode))
        console.log("status,",error.response.status)
        const result = messageType(statusCode)
        setDetailedMsg(result.detailedMsg)
        setShowAlert(true)
      }
    }
    const messageType = (statusCode) => {
      switch (statusCode) {
        case 404:
          return {
            detailedMsg: t('notRegisteredMsg'),
          }
        case 500:
          return {
            detailedMsg: t('serverErrorMsg'),
          }
        case 400:
          return {
            detailedMsg: t('wrongPassword'),
          }
        default:
          return {
            detailedMsg: t('signupUnknownErrorMsg'),
          }
      }
    }

    return (
<ConfigProvider
  theme={{
    token: {
      colorError:'#718096',
      colorPrimary:'#718096',
    },
    components: {
      Form: {
        labelRequiredMarkColor:'#000000',
        itemMarginBottom:0,
        labelHeight:0,
      },
    },
  }}
>



    <Form onFinish={onFinish}
    validateTrigger="onBlur"
    className=" bg-slate-200 rounded-2xl flex flex-col items-center w-[22rem] h-[20rem] justify-center">
     
    <Form.Item
    name="email"
            rules={[
             {
               required: true,
               message:t('pleaseInputEmail'),
             },
             {
                pattern:/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message:t('emailIsNotValid'),
              },
           ]}
           >
     <Input 
     className="w-60 h-14 bg-white  rounded-lg  pl-4
     border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500"
     placeholder={t('email')}  type={"email"} prefix={<MailOutlined />} />
    </Form.Item>
    {showAlert && <div>{detailedMsg} </div>}
    <Form.Item
        name="password"
         rules={[
           {
             required: true,
             message: t('pleaseInputPassword'),
           },
         ]}
        
        >
<Input.Password
  className="w-60 h-14 bg-white rounded-lg  pl-4 mt-4
  border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500"
  placeholder={t('password')}
  prefix={<KeyOutlined />}
  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

/>
</Form.Item>
<div className="flex items-center space-x-2 mb-4">
    <a onClick={showSignupBox} className="border-none bg-transparent text-sm font-medium text-gray-600 hover:text-gray-900">{t('signup')}</a>
    <span className="h-4 w-px bg-gray-900" aria-hidden="true"></span>
    <a onClick={showFindPassword} className="border-none bg-transparent text-sm font-medium text-gray-600 hover:text-gray-900">{t('forgotPassword')}</a>
</div>
<Button
        htmlType="submit" 
        className="w-30 h-10 text-xl
       text-slate-600"
        >
     { t('login')}
      </Button>
      </Form>
    
</ConfigProvider>

  
    );
  };
  
  export default LoginBox;