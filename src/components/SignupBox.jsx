import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { MailOutlined, KeyOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { signupAPI } from "../apis/userAPI";
import AlertBox from "./alertBox"

const SignupBox = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [detailedMsg, setDetailedMsg] = useState("");
  const [type, setType] = useState("");

  const onFinish = async (value) => {
    try {
      const resp = await signupAPI(value);
      setStatus(resp.status);
      const result = messageType();
      setAlertMsg(result.alertMsg);
      setDetailedMsg(result.detailedMsg);
      setType(result.type);
      setShowAlert(true);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };
  const onClose = (e) => {
    console.log(e, 'I was closed.');
  };

  const messageType = () => {
    switch (status) {
      case 202:
        return {
          type: "success",
          alertMsg: t('signupSuccessMsg'),
          detailedMsg: t('signupSuccessDetailedMsg'),
        };
      case 409:
        return {
            type: "error",
            alertMsg: t('signupFailMsg'),
            detailedMsg: t('emailRegisteredMsg'),
          };
      case 500:
        return {
          type: "error",
          alertMsg: t('signupFailMsg'),
          detailedMsg: t('serverErrorMsg'),
        };
      default:
        return {
          type: "error",
          alertMsg: t('signupFailMsg'),
          detailedMsg: t('signupUnknownErrorMsg'),
        };
    }
  };

  return (
    <div>
      {showAlert && <AlertBox alertMsg={alertMsg} detailedMsg={detailedMsg} type={type} />}
      <Form
        onFinish={onFinish}
        closable
        onClose={onClose}
        validateTrigger="onBlur"
        autoComplete="off"
        name="signupForm"
        className="mt-[15rem] w-96 h-96 bg-slate-600 rounded-2xl flex flex-col items-center justify-center"
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: t('pleaseInputEmail') },
            { pattern: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: t('emailIsNotValid') },
          ]}
        >
          <Input className="w-60 h-14 bg-black bg-opacity-10 rounded-lg mb-4 pl-4" placeholder={t('email')} type={"email"} prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: t('pleaseInputPassword') }]}
        >
          <Input.Password
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
              message: t('enterPasswordAgainMsg'), // 如果未输入，则显示此消息
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
            placeholder={t('password')}
            prefix={<KeyOutlined />}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Button htmlType="submit">{t('submit')}</Button>
      </Form>
    </div>
  );
};

export default SignupBox;
