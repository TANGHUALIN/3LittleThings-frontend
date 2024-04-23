import { useEffect, useState,useRef } from "react"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query";
import { Form,Button,Input} from "antd";
import { SendOutlined} from '@ant-design/icons';
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
import { useQuery } from "@tanstack/react-query";
import { fetchDiaryList } from "../queryFN/diaryFN";
import { useQueryClient } from "@tanstack/react-query";
import { addNewDiary } from "../mutationFN/diaryFN";
const DiaryPage=()=>{
    const navigate=useNavigate()
  
    const {t}=useTranslation()
const {
  isPending,
  isError,
  data:diaryList,
  error}=
useQuery({
  queryKey: ['diaryList'],
  queryFn: fetchDiaryList, 
  cacheTime: 1000 * 60 * 60, 
  staleTime: 1000 * 60 * 10, 
  })

      const queryClient = useQueryClient()

      const addMutation = useMutation({
          //コンポーネントのレンダリングの同時に関数の実行を避けるために、mutationFnは関数の定義
        mutationFn: (formData)=>addNewDiary(formData),
        onSuccess: (data) => {
          try {
            queryClient.setQueryData(['diaryList', data.did], (existingDiary) => {
              if (!existingDiary) {
                return {
                  did: data.did,
                  diaryDate: data.diaryDate,
                  diaryEntry: [data],
                  favoriteState: false,
                };
              }
              return {
                ...existingDiary,
                diaryEntry: [...(existingDiary.diaryEntry || []), data],
              }
            })
            queryClient.invalidateQueries('diaryList');
          } catch (error) {
            console.error("Failed to update existing diary:", error);
          }
          
        },
        
        onError: (error) => {
          console.log(error);
        },
      });
      const formRef = useRef(null);
 const handleSubmit =() => {
    formRef.current.validateFields().then((values) => {
      console.log('Received values of form:', values)
      addMutation.mutate({entryContent:values.entryContent})
      formRef.current.resetFields();
    }).catch((errorInfo) => {
      console.log('Failed:', errorInfo);
    });
  };
      return (
        <div className="">
        <Form  ref={formRef} className="flex w-full">
        <Form.Item
         name="entryContent"
         className="w-full"
        > <Input
        type="textarea"
        style={{ resize: 'none' }}
        className="w-2/3 ml-20 h-20 bg-white rounded-lg pl-4 border border-gray-300 hover:border-slate-500 focus:border-slate-500"
        placeholder={t('newdiary')}
        suffix={<SendOutlined rotate="310" className="w-10 h-10 text-3xl hover:text-slate-500" onClick={handleSubmit}/>}
      /></Form.Item>
      
        </Form>

        {diaryList && Array.isArray(diaryList) && diaryList.length > 0 ? (
 <div className="w-2/3 ml-20"> <wc-waterfall gap={10} cols={4} >
    {diaryList.map(item => (
     <div><Diary key={item.did} diary={item} /></div> 
    ))}
  </wc-waterfall></div>
) : null}

         </div>
      )
}
export default DiaryPage