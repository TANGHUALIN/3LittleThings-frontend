import React, { useState,useRef } from 'react';
import { Space } from 'antd';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import CalendarComponent from './Calendar';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../store/modules/user';
import { getItem } from '../utils';
import { useLocation } from 'react-router-dom';
import {
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined,
  BarsOutlined ,
  LineOutlined,
  SwapOutlined
  
} from '@ant-design/icons';
import { Divider, Menu, Switch,Input,Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


const SideNav=()=>{
const { t } = useTranslation()
const [calendarState,setCalendarState]=useState(true)
const handleCalendar=()=>{
    calendarState===true?setCalendarState(false):setCalendarState(true)
}
const calendarClassnames=classNames({ 'hidden': calendarState })
const navigate=useNavigate()
const onMenuClick=(route)=>{
  console.log('menu clicked',route)
  const path=route.key
  navigate(path)
}
//今のパスを取得
const location=useLocation()
console.log(location.pathname)
const selectedKey=location.pathname

 const items = [
      getItem(t('diary'), '/', <BarsOutlined />),
      getItem(t('favorite'), '/favorite',<LineOutlined rotate='90' />),
      getItem(
           t('timeline'),
          '/timeline',
          <HeartOutlined />,
        ),
      ];
return(
        <div className="ml-10">
        <Menu
        style={{
          width: 180,
        }}
        selectedKeys={selectedKey}
        onClick={onMenuClick}
        defaultOpenKeys={['sub1']}
        items={items}
        className='text-base'
      />
      <Input className="ml-5 w-[8rem] " placeholder={t('search')} prefix={<SearchOutlined  />} />
      <Button className="" onClick={handleCalendar} type="text" icon={<CalendarOutlined />}></Button>
      <div className={calendarClassnames}><CalendarComponent /></div>
    
      </div>
        )
    }
export default SideNav;