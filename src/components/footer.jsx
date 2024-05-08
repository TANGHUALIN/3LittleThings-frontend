import { useNavigate } from "react-router-dom"
import FooterFormat from "./FooterFormat"
const FooterWithAboutUs=()=>{
    const navigate=useNavigate()
    const backTo='aboutSite'
    const onClick=(e)=>{
        navigate('/aboutsite')
    }
    return(
       <FooterFormat onClick={onClick} backTo={backTo}/>
    )
}
export default FooterWithAboutUs;