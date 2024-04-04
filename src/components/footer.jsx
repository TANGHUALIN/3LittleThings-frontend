import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
const FooterWithAboutUs=()=>{
    const {t}=useTranslation()
    const navigate=useNavigate()
    const onClick=(e)=>{
        navigate('/aboutsite')
    }
    return(
        <div className="w-full  text-zinc-800 font-normal content-center text-base mb-0">
            <span>©3LittleThings/</span>
            <a onClick={onClick} className="text-zinc-800 hover:text-slate-500">{t('aboutSite')}</a>
        </div>
        
    )
}
export default FooterWithAboutUs;