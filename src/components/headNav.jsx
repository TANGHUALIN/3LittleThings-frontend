import { useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import { clearUserInfo, fetchUserInfo } from "../store/modules/user"
import { useSelector } from "react-redux"
import { getItem } from "../utils"
import { ConfigProvider, Menu,Popconfirm } from "antd"
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import { useNavigate } from "react-router-dom"
const HeadNav=()=>{
//ページを開いたらすぐuidを取得する
const navigate=useNavigate()
const dispatch =useDispatch()
useEffect(()=>{
dispatch(fetchUserInfo())
},[dispatch]
)
const uid=useSelector(state=>state.user.uid)

const[accountState,setAccountState]=useState(false)

useEffect(()=>{
  if(uid){
    setAccountState(true)
  }else{
    setAccountState(false)
  }
},[uid])


const { t,i18n } = useTranslation();
const [currentLanguage,setCurrentLanguage]=useState(i18n.language);
const changeLanguage=(lang)=>{
  i18n.changeLanguage(lang);
  setCurrentLanguage(lang);
}


const onConfirm=()=>{
    console.log('log out')
    dispatch(clearUserInfo())
    navigate('/')
}
const [current, setCurrent] = useState('mail');
const onClick = (e) => {
  console.log('click ', e);
  if(e.key==='logout'){

  }else{
    setCurrent(e.key)
    switch(e.key){
      case 'jp':
        changeLanguage('jp')
        break
      case 'en':
        changeLanguage('en')
        break
      default:
        break

    }
  }
};
const items = [
    getItem(t('theme'), 'theme',null),
    getItem(
        (t('language')), 'language',null,
        [getItem('English','en',null),
        getItem('日本語','jp',null),
        ]
    ),
    accountState&&getItem((<Popconfirm
      title={t('logoutConfirmMsg')}
      onConfirm={onConfirm}
      okText={t('yes')}
      cancelText={t('no')}>
     { t('account')}
      </Popconfirm>
  ),
  
  
  '3',
  null,
  [getItem(t('changePassword'),'change_password',null),
  getItem(t('logout'),'logout',null)
  ]
  
       
      ),
    ].filter(Boolean);
return(
  <ConfigProvider
  theme={{
    token: {
      borderRadius: 0,
      fontSize:20,
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