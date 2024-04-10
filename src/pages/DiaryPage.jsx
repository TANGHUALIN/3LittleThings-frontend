import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch,useSelector } from "react-redux"
import { Form,Button,Input,ConfigProvider} from "antd";
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import { fetchDiaryMap } from "../store/modules/diary";
const DiaryPage=()=>{
    const [diaryMap, setDiaryMap] = useState([]);
    const[classificationList,setClassificationList]=useState([])
    const[favoriteState,setFavoriteState]=useState([])
    const [lastEnterTimestamp, setLastEnterTimestamp] = useState(null);
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {t}=useTranslation()
    useEffect(() => {
        dispatch(fetchDiaryMap());
    }, [dispatch]);
    
    const diaries = useSelector(state => state.diary.DiaryMap);
    
    useEffect(() => {
        if (diaries.length > 0) {
            setDiaryMap(diaries);
        }
    }, [diaries]);
    const onFinish=()=>{
        const currentTimestamp = Date.now(); // 获取当前时间戳
        if (lastEnterTimestamp && isSameDay(lastEnterTimestamp, currentTimestamp)) {
            // 如果上一次按下回车的时间戳存在，并且与当前时间戳是同一天
            // 这里的 isSameDay 是一个自定义函数，用于判断两个时间戳是否是同一天
            // 如果是同一天，说明属于同一个日记
            // 执行将文本发送到后端等操作


        } else {
            // 如果不是同一天，说明是新的日记
            // 执行将文本发送到后端等操作，并可能清空输入框等操作
         
            async(value)=>{
                console.log("new diary",value)
                await dispatch(fetchNewDiary(value))
          }
        }



    }
    const isSameDay = (timestamp1, timestamp2) => {
        const date1 = new Date(timestamp1);
        const date2 = new Date(timestamp2);
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    };
    
      return (
        <div>
        <Form onFinish={onFinish}>
        <Form.Item><Input.TextArea 
         className="w-60 h-14 bg-white  rounded-lg  pl-4
         border border-gray-300 border-opacity-70 hover:border-slate-500 focus:border-slate-500"
         placeholder={t('newDiary')}
        
        /></Form.Item>
        </Form>
          {diaryMap && Array.isArray(diaryMap) && diaryMap.length > 0 && (
        diaryMap.map(item => <Diary key={item.id} diary={item} />)
        )}
         </div>
      )
}
export default DiaryPage