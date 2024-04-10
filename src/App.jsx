import InputWithIcon from "./components/InputWithIcon"
import { useTranslation } from "react-i18next"
import i18n from "./i18n/i18n"
import LoginBox from "./components/LoginBox"

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
