import React, { useState } from "react";
import { Form, Input, Button} from "antd";
import { MailOutlined, KeyOutlined, EyeInvisibleOutlined, EyeTwoTone, CloseOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { signupAPI } from "../apis/userAPI";
import AlertBox from "./alertBox"
import { ConfigProvider } from 'antd';



const SignupBox = ({ closeSignupBox }) => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [detailedMsg, setDetailedMsg] = useState("");
  const [type, setType] = useState("");

  const onFinish = async (value) => {
    try {
      const resp = await signupAPI(value)
      console.log("resp info:", resp)
      const statusCode = parseInt(resp.status)
      setStatus(statusCode)
      console.log("status," + statusCode)
      const result = messageType(statusCode)
      console.log(result)
      setAlertMsg(result.alertMsg)
      setDetailedMsg(result.detailedMsg)
      setType(result.type)
      console.log(result.type)
      setShowAlert(true)
      console.log(showAlert)
    } catch (error) {
      const statusCode = error.response.status;
      setStatus(parseInt(statusCode))
      console.log("status," + statusCode)
      const result = messageType(statusCode)
      setAlertMsg(result.alertMsg)
      setDetailedMsg(result.detailedMsg)
      setType(result.type)
      console.log(result.type)
      setShowAlert(true)
      console.log(showAlert)
    }
  }


  const messageType = (statusCode) => {
    switch (statusCode) {
      case 202:
        return {
          type: "success",
          alertMsg: t('signupSuccessMsg'),
          detailedMsg: t('signupSuccessDetailedMsg'),
        }
      case 409:
        return {
          type: "error",
          alertMsg: t('signupFailMsg'),
          detailedMsg: t('emailRegisteredMsg'),
        }
      case 429:
        return {
          type: "error",
          alertMsg: t('signupFailMsg'),
          detailedMsg: t('signupTwiceMsg'),
        }
      case 500:
        return {
          type: "error",
          alertMsg: t('loginFailed'),
          detailedMsg: t('serverErrorMsg'),
        }
      default:
        return {
          type: "error",
          alertMsg: t('signupFailMsg'),
          detailedMsg: t('signupUnknownErrorMsg'),
        }
    }
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorError: '#718096',
          colorPrimary: '#718096',
        },
        components: {
          Form: {
            labelRequiredMarkColor: '#000000',
            itemMarginBottom: 0,
            labelHeight: 0,
          },
        },
      }}
    >
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
        <Form
          onFinish={onFinish}
          validateTrigger="onBlur"
          autoComplete="off"
          name="signupForm"
          className="bg-slate-300 rounded-2xl flex flex-col items-center w-[24rem] h-[22rem] "
        >
           {showAlert && <AlertBox alertMsg={alertMsg} detailedMsg={detailedMsg} type={type} />}
          <Button className="ml-auto mr-3 mt-3" onClick={closeSignupBox} shape="circle" size="small" icon={ <CloseOutlined/>} />
     
          <Form.Item
            name="email"
            rules={[
              { required: true, message: t('pleaseInputEmail') },
              { pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: t('emailIsNotValid') },
            ]}
          >
            <Input className="w-60 h-14 bg-white  rounded-lg  pl-4 mt-8
     border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500" placeholder={t('email')} type={"email"} prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: t('pleaseInputPassword') }]}
          >
            <Input.Password
              className="w-60 h-14 bg-white rounded-lg  pl-4 mt-4
          border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500"
              placeholder={t('password')}
              prefix={<KeyOutlined />}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item
            name="password2"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: t('enterPasswordAgainMsg'),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('passwordUnmatchMsg')));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder={t('passwordConfirm')}
              prefix={<KeyOutlined />}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              className="w-60 h-14 bg-white rounded-lg  pl-4 mt-4
            border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500"/>
          </Form.Item>
          <Button htmlType="submit"
            className="w-30 h-10 text-xl
           text-slate-600 mt-4">{t('signup')}</Button>
        </Form>
            </div>
    </ConfigProvider>



  );
};

export default SignupBox;
