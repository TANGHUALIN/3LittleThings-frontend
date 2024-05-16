import { useEffect,useState } from "react";
import { Button,Form,Input,ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { MailOutlined,EyeInvisibleOutlined,KeyOutlined,CloseOutlined } from "@ant-design/icons"
import AlertBox from "../components/AlertBox";
import { changePasswordAPI } from "../apis/userAPI";
import { useNavigate } from "react-router-dom";
import {removeToken } from "../utils/token"

const CorrectPassword = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [detailedMsg, setDetailedMsg] = useState('');
  const [type, setType] = useState('')

  const closeChangePassword=()=>{
   navigate(-1)
  }
  const{t}=useTranslation()
  const navigate=useNavigate()
  const onFinish = async (value) => {
    try {
      const resp = await changePasswordAPI(value);
      const statusCode = parseInt(resp.status);
      const result = messageType(statusCode);

      setAlertMsg(result.alertMsg);
      setDetailedMsg(result.detailedMsg);
      setType(result.type);
      setShowAlert(true)
      setFetchComplete(true);
    } catch (error) {
      const statusCode = error.response.status;
      const result = messageType(statusCode);

      setAlertMsg(result.alertMsg);
      setDetailedMsg(result.detailedMsg);
      setType(result.type);
      setShowAlert(true);
      setFetchComplete(true);
    }
  };

  const messageType = (statusCode) => {
    switch (statusCode) {
      case 202:
        return {
          type: "success",
          alertMsg: t('resetPasswordSuccessMsg'),
          detailedMsg: t('resetPasswordDetailedMsg'),
        }
      case 404:
        return {
          type: "error",
          alertMsg: t('resetPasswordFailMsg'),
          detailedMsg: t('emailIsWrong'),
        }
      case 500:
        return {
          type: "error",
          alertMsg: t('resetPasswordFailMsg'),
          detailedMsg: t('internalErrorMsg'),
        }
      default:
        return {
          type: "error",
          alertMsg: t('resetPasswordFailMsg'),
          detailedMsg: t('resetUnknownErrorMsg'),
        }
    }
  }
  useEffect(() => {
    if (fetchComplete) {
      const timer = setTimeout(() => {
        removeToken()
        navigate("/")
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [fetchComplete]);

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
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75 z-50">

      {showAlert && <AlertBox alertMsg={alertMsg} detailedMsg={detailedMsg} type={type}  />}
        <Form
        onFinish={onFinish}
        validateTrigger="onBlur"
        autoComplete="off"
        name="changePasswordForm"
        className="bg-slate-300 rounded-2xl flex flex-col items-center w-[24rem] h-[22rem] "
      >
          <Button className="ml-auto mr-3 mt-3" onClick={closeChangePassword} shape="circle" size="small" icon={ <CloseOutlined/>} />
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
           text-slate-600 mt-4">{t('resetPassword')}</Button>
        </Form>
            </div>
    
        </ConfigProvider>
    )
}
export default CorrectPassword;