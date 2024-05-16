import { useEffect, useState,useRef } from "react"
import React from 'react'
import { useMutation } from "@tanstack/react-query";
import { Form,Button,Input,ConfigProvider} from "antd";
import { SendOutlined} from '@ant-design/icons';
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
import { fetchDiaryList } from "../queryFN/diaryFN";
import { useQueryClient,useInfiniteQuery} from "@tanstack/react-query";
import { addNewDiary } from "../mutationFN/diaryFN";
import SearchBox from "../components/SearchBox";
import CalendarBox from "../components/CalendarBox";
import { useInView } from "react-intersection-observer";

const DiaryOrFavorite=({favorite})=>{
    
  
const {t}=useTranslation()

      const queryClient = useQueryClient()
      const diaryList=queryClient.getQueryData('diaryList')
      const [displayDiary,setDisplayDiary]=useState()
     
 const handleSubmit =() => {
    formRef.current.validateFields().then((values) => {
      console.log('Received values of form:', values)
      addMutation.mutate({entryContent:values.entryContent})
      formRef.current.resetFields();
    }).catch((errorInfo) => {
      console.log('Failed:', errorInfo);
    });
  };
  {/*検索機能 */}
  const [searchKeyword, setSearchKeyword] = useState('');
  
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  }

  


  const {
    fetchNextPage,
    hasNextPage,
    data,
    isLoading
  } = useInfiniteQuery({
    queryKey:['diaryList'],
    queryFn: ({ pageParam}) => fetchDiaryList(pageParam),
    initialPageParam:1,
    getNextPageParam:(lastPage,pages) => lastPage.meta.nextPage
    
  })
  useEffect(() => {
    if (!isLoading && data && data.pages && data.pages.length > 0) {
      let sortedDiaries = [];
      const allDiaries = data.pages.flatMap(page => page.data);
      sortedDiaries = allDiaries.sort((a, b) => {
        return new Date(b.diaryDate) - new Date(a.diaryDate);
      });
      let filteredDiaries = [];
      if (searchKeyword && favorite) {
        filteredDiaries = sortedDiaries.filter(diary => {
          console.log('Filtering diary:', diary);
          return diary && diary.favoriteState === true && diary.diaryEntry.some(entry =>
            entry.entryContent.includes(searchKeyword)
          );
        });
      } else if (favorite) {
        filteredDiaries = sortedDiaries.filter(diary => {
          console.log('Filtering diary:', diary);
          return diary && diary.favoriteState === true;
        });
      } else if (searchKeyword) {
        filteredDiaries = sortedDiaries.filter(diary => {
          console.log('Filtering diary:', diary);
          return diary && diary.diaryEntry.some(entry => entry.entryContent.includes(searchKeyword));
        });
      } else {
        filteredDiaries = sortedDiaries;
      }
  
      setDisplayDiary(filteredDiaries);
    } else{
      setDisplayDiary(undefined)
    }
  }, [searchKeyword, favorite, isLoading, data]);
  

  

   
  
  
console.log("data with pageInfo",data)
{/*Intersection　Observation */}


const {ref,inView}=useInView()
console.log("inview",inView)
console.log("next page",hasNextPage)

useEffect(() => {
  if (hasNextPage && inView) {

    fetchNextPage();
  }
}, [inView, hasNextPage, fetchNextPage]);
const addMutation = useMutation({
mutationFn: (formData)=>addNewDiary(formData),
onSuccess: () => {  
queryClient.invalidateQueries('diaryList')
},
onError: (error) => {
  console.log(error);
},
});
const formRef = useRef(null);

return (
  <ConfigProvider
  theme={{
    token: {
      colorError:'#718096',
      colorPrimary:'#718096',
    },
  
  }}
>
    <div>
      <Form ref={formRef} className="flex w-full mb-0">
        <Form.Item
          name="entryContent"
          className="w-full"
        >
          <Input
            onPressEnter={handleSubmit}
            type="textarea"
            className="w-2/3 ml-20 h-20 bg-white rounded-lg pl-4 border border-gray-300 whitespace-pre-line hover:border-slate-500 focus:border-slate-500"
            placeholder={t('newdiary')}
            suffix={<SendOutlined rotate="310" className="w-10 h-10 text-3xl hover:text-slate-500" onClick={handleSubmit}/>}
          />
        </Form.Item>
      </Form>
      <div className="flex ml-20 items-center h-0.5 mb-6">
    
        <SearchBox onSearch={handleSearch}/>
      </div>
  {/* diary display area */}
<div className="w-2/3 ml-20">
  {displayDiary && displayDiary.length > 0 && (
    <wc-waterfall gap={10} cols={4}>
      {displayDiary.map((item) => (
        item && item.did && ( 
          <div key={item.did}>
            <Diary key={item.did} diary={item} keyword={searchKeyword} />
          </div>
        )
      ))}
    </wc-waterfall>
  )}
</div>
   
      <div ref={ref} ></div> 
    </div>
  </ConfigProvider>
)

}
export default DiaryOrFavorite