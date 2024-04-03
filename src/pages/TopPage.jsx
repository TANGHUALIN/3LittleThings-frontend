import App from "../App"
import SideNav from "../components/sideNav"
import CalendarComponent from "../components/calendar"
import HeadNav from "../components/headNav"
import ClassificationPulldown from "../components/classification"
import Diary from "../components/Diary"
import SiteTitle from "../components/siteTitle"
import SampleDiaries from "../components/sampleDiaries"
import SignupBox from "../components/SignupBox"
import { Layout, Flex } from 'antd';
import FooterWithAboutUs from "../components/footer"
import SampleTimeline from "../components/timeline"
import { useTranslation } from "react-i18next"
import { processContentReturnP } from "../utils"
import LoginBox from "../components/loginBox"
const { Header, Footer,Content } = Layout;
const TopPage=()=>{
    const headerStyle = {
        height: 150,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#132238',
    };
    const layoutStyle={
        height: '100%'
    }
      const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#132238',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#132238',
    };
    const {t}=useTranslation()
    const introductionMsg=processContentReturnP(t('introductionMsg'))
    const welcomeMsg=processContentReturnP(t('welcomeMsg'))
return(
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="flex ml-10 mt-8">
      <SiteTitle />
      <div className="ml-auto">header</div>
        
        </div> 
      </Header>








      <Content style={contentStyle}>
        {/*sample diaries and introduction block start*/ }
        <div className="flex">
        <div className="ml-10 w-2/3 p-10"> <SampleDiaries />
        <div className="ml-10 w-2/3  justify-center items-center">
        {introductionMsg}</div>
        </div>
         {/**/ }

         {/**/ }
         
        <div className="flex-auto mr-36">
        <div className=" text-slate-100 text-4xl">
        {welcomeMsg}
        </div>
        <LoginBox />
         {/**/ }
        
         {/**/ }
        </div>
    
        </div> 

      </Content>

      <Footer style={footerStyle}><FooterWithAboutUs /></Footer>
    </Layout>
)

}
export default TopPage;