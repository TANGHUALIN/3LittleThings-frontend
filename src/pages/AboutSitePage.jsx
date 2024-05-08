import { useTranslation } from "react-i18next"
import HeadNav from "../components/HeadNav"
import SiteTitle from "../components/SiteTitle"
import { Layout} from 'antd';
import FooterFormat from "../components/FooterFormat";
import { useNavigate } from "react-router-dom";
import { processContentReturnP } from "../utils";
import { Button } from "antd"
import { GithubOutlined } from "@ant-design/icons";

const { Header, Footer,Content } = Layout
const AboutSitePage=()=>{
    const {t,i18n}=useTranslation()
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
        textAlign: 'left',
        lineHeight: '25px',
        color: '#fff',
        backgroundColor: '#FFFFFF',
    };
    const footerStyle = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#FFFFFF',
    }
    const createReasonP=processContentReturnP(t('createReasonDetail'))
    const futureP=processContentReturnP(t('futureDevDetail'))
    const aboutSiteP=processContentReturnP(t('abouteTheSiteDetail'))
    const emailInfoP=processContentReturnP(t('emailInfo'))
    const finalP=processContentReturnP(t('finalMsg'))
    const layoutClassName = i18n.language === 'jp' ? 'font-noto-jp' : 'font-noto-cn'
    const navigate=useNavigate()
    const onClick=(e)=>{
        navigate(-1)
    }
   
    return (
        <Layout style={layoutStyle} className={layoutClassName}>
      <Header style={headerStyle}>
        <div className="flex ml-10 mt-8">
      <SiteTitle />
      <div className="ml-auto"><HeadNav /></div>
        
        </div> 
      </Header>

      <Content style={contentStyle}>
      <div className="text-black ml-20 w-3/5  h-1/3">
        <div className="font-bold text-slate-400 text-lg">{t('createReason')}</div>
        <div>{createReasonP}</div>
        <div className="font-bold text-slate-400 text-lg">{t('futureDev')}</div>
        <div>{futureP}</div>
        <div className="font-bold text-slate-400 text-lg">{t('aboutTheSite')}</div>
        <div>{aboutSiteP}</div>
        <br/>
        <div>{emailInfoP}</div>
        <br/>
        <div>{finalP}</div><br/><br/>
        <div>{t('clickToLinkGithub')}<a  href="https://github.com/TANGHUALIN" target="_blank">{<GithubOutlined />}</a></div>
        </div>
        </Content>
        <Footer style={footerStyle}
      className="flex items-center justify-center"
      ><FooterFormat onClick={onClick} backTo='back'/></Footer>
    </Layout>
    )
}
export default AboutSitePage;

