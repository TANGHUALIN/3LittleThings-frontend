import App from "../App"
import SideNav from "../components/SideNav"
import CalendarComponent from "../components/Calendar"
import HeadNav from "../components/HeadNav"
import ClassificationPulldown from "../components/Classification"
import Diary from "../components/DiaryFormat"
import SiteTitle from "../components/SiteTitle"
import SampleDiaries from "../components/SampleDiaries"
import SignupBox from "../components/SignupBox"
import { Layout, Flex } from 'antd';
import FooterWithAboutUs from "../components/Footer"
import SampleTimeline from "../components/Timeline"
import { useTranslation } from "react-i18next"
import { processContentReturnP } from "../utils"
import LoginBox from "../components/LoginBox"
import { useState } from "react"
const { Header, Footer,Content } = Layout;
const TopPage=()=>{
    const headerStyle = {
        height: 150,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#FFFFFF',
    };
    const layoutStyle={
        height: '100%'
    }
      const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#FFFFFF',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FFFFFF',
    };
    const {t}=useTranslation()
    const introductionMsg=processContentReturnP(t('introductionMsg'))
    const welcomeMsg=processContentReturnP(t('welcomeMsg'))
    const [signupDisplay,setSignupDisplay]=useState(false)
    const showSignupBox=()=>{
      setSignupDisplay(true)
    }
    const closeSignupBox=()=>{
        setSignupDisplay(false)
    }
    
return(
    <Layout style={layoutStyle} className="font-noto-jp">
      <Header style={headerStyle}>
        <div className="flex ml-10 mt-8">
      <SiteTitle />
      <div className="ml-auto"><HeadNav /></div>
        
        </div> 
      </Header>

      <Content style={contentStyle}>
      {signupDisplay&&<SignupBox closeSignupBox={closeSignupBox}/>}
        {/*sample diaries and introduction block start*/ }
        <div className="flex ">
    
        <div className="flex flex-col ml-10 w-2/3 p-10 mb-0
        "> <div><SampleDiaries /></div>
         <div className="ml-5 text-2xl mt-0">
        {introductionMsg}</div>
        </div>

         <div className="flex flex-col items-center justify-center h-full">
        <div className="flex-auto items-center">
        <div className="w-4/5 justify-center ml-5 text-3xl mb-5">
        {welcomeMsg}
        </div>
    <div className="ml-16 justify-center">
      <LoginBox showSignupBox={showSignupBox}/>
    </div>
  </div>
</div>


        </div> 

      </Content>

      <Footer style={footerStyle}
      className="flex items-center justify-center"
      ><FooterWithAboutUs /></Footer>
    </Layout>
)

}
export default TopPage;