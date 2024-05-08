import HeadNav from "../components/HeadNav"
import SiteTitle from "../components/SiteTitle"
import SampleDiaries from "../components/SampleDiaries"
import SignupBox from "../components/SignupBox"
import { Layout} from 'antd';
import FooterWithAboutUs from "../components/Footer"
import { useTranslation } from "react-i18next"
import { getToken, processContentReturnP } from "../utils"
import LoginBox from "../components/LoginBox"
import { useEffect, useState } from "react"
import FindPasswordBox from "../components/FindPasswordBox";
import { useNavigate } from "react-router-dom";
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
    }
    const token=getToken()
    const navigate=useNavigate()
    useEffect(
      ()=>{
        if(token){
          navigate('/diary')
        }
      },[token]
    )
    const {t,i18n}=useTranslation()
    const introductionMsg=processContentReturnP(t('introductionMsg'))
    const welcomeMsg=processContentReturnP(t('welcomeMsg'))
    const [signupDisplay,setSignupDisplay]=useState(false)
    const [findPasswordDisplay,setfindPasswordDisplay]=useState(false)
    const showSignupBox=()=>{
      setSignupDisplay(true)
    }
    const closeSignupBox=()=>{
        setSignupDisplay(false)
    }
    const showFindPassword=()=>{
      setfindPasswordDisplay(true)
    }
    const closeFindPassword=()=>{
      setfindPasswordDisplay(false)
    }
    const layoutClassName = i18n.language === 'jp' ? 'font-noto-jp' : 'font-noto-cn'
   
return(
    <Layout style={layoutStyle} className={layoutClassName}>
      <Header style={headerStyle}>
        <div className="flex ml-10 mt-8">
      <SiteTitle />
      <div className="ml-auto"><HeadNav /></div>
        
        </div> 
      </Header>

      <Content style={contentStyle}>
      {signupDisplay&&<SignupBox closeSignupBox={closeSignupBox}/>}
      {findPasswordDisplay&&<FindPasswordBox closeFindPassword={closeFindPassword}/>}
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
      <LoginBox showSignupBox={showSignupBox} showFindPassword={showFindPassword}/>

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