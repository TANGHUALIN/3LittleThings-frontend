import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch,useSelector } from "react-redux"
import { Form,Button,Input,ConfigProvider} from "antd";
import { SendOutlined} from '@ant-design/icons';
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
import ClassificationPulldown from "../components/Classification";
import { fetchDiaryList, setDiaryList } from "../store/modules/diary";
const DiaryPage=()=>{
    const[classificationList,setClassificationList]=useState([])
    const[favoriteState,setFavoriteState]=useState([])
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {t}=useTranslation()
    useEffect(() => {
        dispatch(fetchDiaryList());
    }, [dispatch]);
    
    const diaries = useSelector(state => state.diary.diaryList);
   

    useEffect(() => {
        if (diaries.length > 0) {
            setDiaryList(diaries);
        }
    }, [diaries]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); 
          event.stopPropagation();
        }
      };
    
      const onFinish = async (value) => {
        console.log('Received values of form:', value);
        await dispatch(fetchNewDiary(value));
      };
    

      return (
        <div className="">
        <Form onFinish={onFinish} className="flex  w-full">
        <Form.Item
         name="entryContent"
         className="w-full"
        > <Input
        type="textarea"
        style={{ resize: 'none' }}
        className="w-2/3 ml-20 h-20 bg-white rounded-lg pl-4 border border-gray-300 hover:border-slate-500 focus:border-slate-500"
        placeholder={t('newdiary')}
        suffix={<SendOutlined rotate="310" className="w-10 h-10 text-3xl hover:text-slate-500"/>}
      /></Form.Item>
      
        </Form>

        {diaries && Array.isArray(diaries) && diaries.length > 0 ? (
  <wc-waterfall gap={10} cols={5}>
    {diaries.map(item => (
     <div><Diary key={item.did} diary={item} /></div> 
    ))}
  </wc-waterfall>
) : null}

         </div>
      )
}
export default DiaryPage