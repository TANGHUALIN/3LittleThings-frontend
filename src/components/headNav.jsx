import { useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import { clearUserInfo, fetchUserInfo } from "../store/modules/user"
import { useSelector } from "react-redux"
import { getItem } from "../utils"
import { Menu,Popconfirm } from "antd"
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

const { t } = useTranslation();
const [currentLanguage,setCurrentLanguage]=useState('jp');

const changeLanguage=()=>{
  const nextLanguage=currentLanguage==='jp'?'en':'jp';
  t.changeLanguage(nextLanguage);
  setCurrentLanguage(nextLanguage);
};

const buttonClass=(language)=>classnames(
  {
      'current':currentLanguage===language,
      'notCurrent':currentLanguage!==language,
  }
)

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
  }
};
const items = [
    getItem(t('theme'), '1',null),
    getItem(
        (<div className={classNames(buttonClass)}>{t('language')}</div>), 'languageNow',null,
        [getItem(t('language'),'languageSub1',null),
        ]
    ),
    getItem(
        (<Popconfirm
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
    ];
return(
    <Menu
    onClick={onClick}
    selectedKeys={[current]}
    mode="horizontal"
    items={items}
  />
)
}
export default HeadNav