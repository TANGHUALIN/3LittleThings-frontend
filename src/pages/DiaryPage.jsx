import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch,useSelector } from "react-redux"
import { Form,Button,Input,ConfigProvider} from "antd";
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
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
        <div className="w-3/4">
        <Form onFinish={onFinish} className="flex">
        <Form.Item
         name="entryContent"
        ><Input.TextArea 
         className="w-65 h-14 bg-white  rounded-lg  pl-4
         border border-gray-300 border-opacity-70 resize-none hover:border-slate-500 focus:border-slate-500"
         placeholder={t('newdiary')}
        
        /></Form.Item>
        <Button
        htmlType="submit" 
        className="w-30 h-10 text-xl
       text-slate-600"
        >
     { t('submit')}
      </Button>
        </Form>
        {diaries && Array.isArray(diaries) && diaries.length > 0 ? (
  <wc-waterfall gap={10} cols={5}>
    {diaries.map(item => (
      <Diary key={item.did} diary={item} />
    ))}
  </wc-waterfall>
) : null}

         </div>
      )
}
export default DiaryPage