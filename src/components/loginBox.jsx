import {useTranslation} from "react-i18next"
import {useState,useRef } from "react";
import React from "react";
import i18n from "../i18n/i18n";
import classNames from "classnames";
import { Form,Button,Input} from "antd";
import { MailOutlined,KeyOutlined,EyeInvisibleOutlined, EyeTwoTone  } from "@ant-design/icons";
import {  useDispatch } from "react-redux";
import { fetchLogin } from "../store/modules/user";
import { useNavigate } from "react-router-dom";


const LoginBox = () => {
    const { t } = useTranslation();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const onFinish=async(value)=>{
      console.log(value)
      await dispatch(fetchLogin(value))
      navigate('/diary')
    
    }
    return (
    <Form onFinish={onFinish}
    validateTrigger="onBlur"
    className=" w-96 h-96 bg-slate-600 rounded-2xl flex flex-col items-center justify-center">
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
     className="w-60 h-14 bg-black bg-opacity-10 rounded-lg mb-4 pl-4"
     placeholder={t('email')}  type={"email"} prefix={<MailOutlined />} />
    </Form.Item>
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
  placeholder={t('password')}
  prefix={<KeyOutlined />}
  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

/>
</Form.Item>

<div className="flex items-center">
      <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign up</a>
        <span className="h-4 w-px bg-gray-200" aria-hidden="true"></span>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Forgot password?</a>
      </div>
    </div>

    <Button
        htmlType="submit" 
        >
     { t('submit')}
      </Button>
      </Form>
  
    );
  };
  
  export default LoginBox;