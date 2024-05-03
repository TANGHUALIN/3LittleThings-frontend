import { useEffect, useState,useRef } from "react"
import React from 'react';
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query";
import { Form,Button,Input,ConfigProvider} from "antd";
import { SendOutlined} from '@ant-design/icons';
import Diary from "../components/DiaryFormat";
import { useTranslation } from "react-i18next";
import 'wc-waterfall'
import { useQuery } from "@tanstack/react-query";
import { fetchDiaryList } from "../queryFN/diaryFN";
import { useQueryClient,useInfiniteQuery} from "@tanstack/react-query";
import { addNewDiary } from "../mutationFN/diaryFN";
import SearchBox from "../components/SearchBox";
import CalendarBox from "../components/CalendarBox";
import { useInView } from "react-intersection-observer";

const DiaryOrFavorite=()=>{
    
  
const {t}=useTranslation()

      const queryClient = useQueryClient()
      const diaryList=queryClient.getQueryData('diaryList')
      const [showDiary,setShowDiary]=useState(true)
      const [displayDiary,setDisplayDiary]=useState([])
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
          } catch (error) {
            console.error("Failed to update existing diary:", error);
          }
       refetch()
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
  {/*検索機能 */}
  const [searchKeyword, setSearchKeyword] = useState('');
  
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  }

  useEffect(() => {
    if (searchKeyword) {
      console.log("searchKw",searchKeyword)
      const filteredDiaryList = data.page.filter((diary) => (
      diary.diaryEntry.some((entry) => 
         (entry.entryContent.includes(searchKeyword)))
    ))
      setDisplayDiary(filteredDiaryList)
    } else {
      setDisplayDiary(diaryList);
    }
  }, [searchKeyword, diaryList]);


  const {
    fetchNextPage,
    hasNextPage,
    data,
    refetch
  } = useInfiniteQuery({
    queryKey:['diaryList'],
    queryFn: ({ pageParam}) => fetchDiaryList(pageParam),
    initialPageParam:1,
    getNextPageParam:(lastPage,pages) => lastPage.meta.nextPage
    
  })
console.log("data with pageInfo",data)
{/*Intersection　Observation */}
const loadingRef = useRef(null);

const {ref,inView}=useInView()
console.log("inview",inView)
console.log("next page",hasNextPage)

useEffect(() => {
  if (hasNextPage && inView) {

    fetchNextPage();
  }
}, [inView, hasNextPage, fetchNextPage]);

return (
  <ConfigProvider
    theme={{
      token: {
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
        <CalendarBox />
        <SearchBox onSearch={handleSearch}/>
      </div>
      {/* diary display area */}
      {data && data.pages && (
        <div className="w-2/3 ml-20">
          <wc-waterfall gap={10} cols={4}>
            {data.pages.map((page, pageIndex) => (
              Array.isArray(page.data) && (
                <React.Fragment key={pageIndex}>
                  {page.data.map((item) => (
                    <div key={item.did}>
                      <Diary key={item.did} diary={item} keyword={searchKeyword} />
                    </div>
                  ))}
                </React.Fragment>
              )
            ))}
          </wc-waterfall>
        </div>
      )}
      <div ref={ref} className="h-0 hidden"></div> 
    </div>
  </ConfigProvider>
);

}
export default DiaryOrFavorite