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
const CalendarBox=({onCanlendarClick})=>{

    const [calendarState,setCalendarState]=useState(false)
    const handleCalendar=()=>{
        calendarState===true?setCalendarState(false):setCalendarState(true)
    }
    return(
      <div>
<Button className="" onClick={handleCalendar} icon={<CalendarOutlined />}></Button>
<div className="">{calendarState&&<CalendarComponent />}</div>
</div>  
    )
}


export default CalendarBox