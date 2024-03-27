import { useNavigate } from "react-router-dom"
const FooterWithAboutUs=()=>{
    const navigate=useNavigate()
    const onClick=(e)=>{
        navigate('/aboutsite')
    }
    return(
        <div className="w-80 h-10  text-zinc-600 text-2xl font-normal content-center">
            <span>©3LittleThings/</span>
            <span onClick={onClick}>{t('aboutSite')}</span>
        </div>
        
    )
}
export default FooterWithAboutUs;