import { Form,Button,Input,ConfigProvider} from "antd"
import { findPasswordAPI } from "../apis/userAPI"
import { CloseOutlined,MailOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"
import AlertBox from "./AlertBox"
import { useState } from "react"


const FindPasswordBox=({closeFindPassword})=>{
    const { t } = useTranslation();
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [detailedMsg, setDetailedMsg] = useState("");
  const [type, setType] = useState("")
    const onFinish = async (value) => {
        try {
          const resp = await findPasswordAPI(value)
          console.log("resp info:", resp)
          const statusCode = parseInt(resp.status)
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
          const statusCode = error.response.status
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
              alertMsg: t('findPasswordSuccessMsg'),
              detailedMsg: t('findPasswordDetailedMsg'),
            }
          case 404:
            return {
              type: "error",
              alertMsg: t('findPasswordFailMsg'),
              detailedMsg: t('notRegisteredMsg'),
            }
          case 400:
            return {
              type: "error",
              alertMsg: t('findPasswordFailMsg'),
              detailedMsg: t('emailIsNotValid'),
            }
          default:
            return {
              type: "error",
              alertMsg: t('findPasswordFailMsg'),
              detailedMsg: t('signupUnknownErrorMsg'),
            }
        }
      }
    return(
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
        name="findPasswordForm"
        className="bg-slate-300 rounded-2xl flex flex-col items-center w-[24rem] h-[18rem] "
      >
        
        <Button className="ml-auto mr-3 mt-3" onClick={closeFindPassword} shape="circle" size="small" icon={ <CloseOutlined/>} />
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
          <Button htmlType="submit"
            className="w-30 h-10 text-xl
           text-slate-600 mt-4">{t('sendEmail')}</Button>
          </Form>
   </div>
   </ConfigProvider>
    )
}
export default FindPasswordBox