import React, { useState,useRef } from 'react';
import { Space } from 'antd';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';
import CalendarComponent from './Calendar';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../utils';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery,useQueryClient } from '@tanstack/react-query';
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


const navigate=useNavigate()
const onMenuClick=(route)=>{
  console.log('menu clicked',route)
  const path=route.key
  navigate(path)
}

const location=useLocation()
console.log(location.pathname)
const selectedKey=[location.pathname]

 const items = [
      getItem(t('diary'), '/diary', <BarsOutlined />),
      getItem(t('favorite'), '/diary/favorite', <HeartOutlined />),
      getItem(
           t('timeline'),
          '/diary/timeline',
          <LineOutlined rotate='90' />,
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
    
      </div>
        )
    }
export default SideNav;