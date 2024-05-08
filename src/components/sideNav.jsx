import React, { useState,useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import { getItem } from '../utils';
import { useLocation } from 'react-router-dom';
import {
  HeartOutlined,
  BarsOutlined ,
  LineOutlined,
} from '@ant-design/icons';
import { Menu,ConfigProvider } from 'antd';



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
  <ConfigProvider
  theme={{
    token: {
      colorError: '#718096',
      colorPrimary: '#6495ED',
    },
    components: {
      Menu: {
        horizontalItemSelectedColor:''
      },
    },
  }}
>
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
      </ConfigProvider>
        )
    }
export default SideNav;