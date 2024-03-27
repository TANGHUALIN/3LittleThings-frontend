import InputWithIcon from "./components/inputWithIcon"
import { useTranslation } from "react-i18next"
import i18n from "./i18n/i18n"
import LoginBox from "./components/loginBox"

function App() {
  
const {t}=useTranslation()
  return (
  <div>
  <LoginBox>

  </LoginBox>
  </div>
 
  )
}

export default App
