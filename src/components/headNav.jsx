
import { useEffect,useState } from "react"
import { getToken, removeToken } from "../utils"
import { getItem } from "../utils"
import { ConfigProvider, Menu,Popconfirm } from "antd"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
const HeadNav=()=>{
const navigate=useNavigate()
const[accountState,setAccountState]=useState(false)

useEffect(()=>{
  const token=getToken()
  if(token){
    setAccountState(true)
  }else{
    setAccountState(false)
  }
},[])


const { t,i18n } = useTranslation();


const changeLanguage=(lang)=>{
  i18n.changeLanguage(lang)
}



const [current, setCurrent] = useState()
const onClick = (e) => {
  console.log('click ', e);
  if(e.key==='logout'){
    setAccountState(false)
    removeToken()
    navigate('/')
  }else{
    setCurrent(e.key)
    switch(e.key){
      case 'jp':
        changeLanguage('jp')
        break
      case 'en':
        changeLanguage('en')
        break
      case 'cn':
        changeLanguage('cn')
        break
      case 'change_password':
        navigate('/changepassword')
        break
      default:
        break

    }
  }
}
const items = [
  getItem(
    t('language'), 
    'language',
    null,
    [
      getItem('English', 'en', null),
      getItem('日本語', 'jp', null),
      getItem('中文', 'cn', null),
    ]
  ),
  accountState && getItem(
    t('account'),
    'account',
    null,
    [
      getItem(t('changePassword'), 'change_password', null),
      getItem(
       (
  
            t('logout')
      
        ),
        'logout',
        null
      )
    ]
  ),
].filter(Boolean);



return(
  <ConfigProvider
  theme={{
    token: {
      borderRadius: 0,
      fontSize:20,
      colorPrimary:'#6495ED',
    },
   
    components: {
      Menu: {
       itemBg:'#FFFFFF',
       itemHoverBg:'rgb(239, 248, 251,0.4)',
       horizontalItemHoverColor:'#523333',
       popupBg:'rgb(240, 249, 254,0.8)',
       horizontalItemHoverBg:'rgb(240, 249, 254,0.9)',
       itemBorderRadius:0,
       dropdownWidth:50,
       itemColor:'#55769D',
       itemHoverColor:'#98CCD3',
      },
     
    },
    
  }}
  
  >
    <Menu 
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
    className=""

  />
  </ConfigProvider>
)
}
export default HeadNav