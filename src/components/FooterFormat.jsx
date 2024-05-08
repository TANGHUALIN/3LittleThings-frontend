import { useTranslation } from "react-i18next"
const FooterFormat=({onClick,backTo})=>{
    const {t}=useTranslation()
    return(
        <div className="w-full  text-zinc-800 font-normal content-center text-base mb-0">
            <span>©3LittleThings/</span>
            <a onClick={onClick} className="text-zinc-800 hover:text-slate-500">{t(backTo)}</a>
        </div>    
    )
}
export default FooterFormat