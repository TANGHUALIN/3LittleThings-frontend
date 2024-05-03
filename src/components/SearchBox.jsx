import { useState,useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined,
  BarsOutlined ,
  LineOutlined,
  SwapOutlined
} from '@ant-design/icons';
import { Divider, Menu, Switch,Input,Button,ConfigProvider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
const SearchBox=({onSearch})=>{
    const {t}=useTranslation()
    const [keyword, setKeyword] = useState('');
    const handleChange = (e) => {
        const{value}=e.target
        setKeyword(value);
        console.log("handleChabg",value)
        onSearch(value); 
    }

    return(
        <ConfigProvider
        theme={{
          token: {
          },
        }}
      >
        <Input className="ml-2 w-[8rem] h-[2rem] " onChange={handleChange} placeholder={t('search')} prefix={<SearchOutlined  />} />
    
    </ConfigProvider>)
}
export default SearchBox