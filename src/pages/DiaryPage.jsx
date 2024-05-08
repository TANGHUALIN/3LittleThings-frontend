import { useEffect, useState,useRef } from "react"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query";
import { Form,Button,Input} from "antd";
import { SendOutlined} from '@ant-design/icons';
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import { fetchDiaryList,fetchDiaryCount } from "../queryFN/diaryFN";
import { useQueryClient } from "@tanstack/react-query";
import { addNewDiary } from "../mutationFN/diaryFN";
import DiaryOrFavorite from "./DiaryOrFavorite";
const DiaryPage=()=>{
    const navigate=useNavigate()

    const {t}=useTranslation()

      return (
        <DiaryOrFavorite  favorite={undefined} />
      )
}
export default DiaryPage