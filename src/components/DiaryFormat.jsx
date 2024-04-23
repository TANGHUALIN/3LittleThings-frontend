import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined} from "@ant-design/icons"
import { Card, ConfigProvider } from "antd";
import { processEntryReturnLi,processContentReturnLi } from "../utils/contentProcess";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { deleteDiary, updateFavoriteState } from "../mutationFN/diaryFN";


const Diary=({diary})=>{

 
  const [favoriteState, setFavoriteState] = useState(diary.favoriteState);
  console.log("print inside diary",favoriteState)
  

const queryClient = useQueryClient()
 
  let contentList;
  if(diary.diaryEntry){
    contentList = processEntryReturnLi(diary.diaryEntry)}else if(diary.content){
    contentList=processContentReturnLi(diary.content)
  }else{ contentList=null }
  const clickHeart=()=>{
    console.log("clicked",)
    try{
      favoriteStateMutation.mutate([diary.did,!favoriteState])
    setFavoriteState(!favoriteState)
  } catch(error){
    console.log(error)
   }
  }
  const favoriteStateMutation=useMutation({
    mutationFn: ([did,fS])=>updateFavoriteState(did,fS),
    onSuccess: (data) => {
      console.log("Mutation succeeded with data:", data)
      if(data.status === 200){
        queryClient.setQueryData(['diaryList', data.did], (existingDiary) => {
          return {
            ...existingDiary,
            favoriteState: !existingDiary.favoriteState
          };
        });
      }
      queryClient.invalidateQueries('diaryList');
    },    
      onError: (error) => {
      console.log("Mutation failed with error:", error)
      },
     } )


     const deleteDiaryMutation=useMutation({
      mutationFn: (did)=>deleteDiary(did),
      onSuccess: (data) => {
        console.log("Mutation succeeded with data:", data)
        if(data.status === 200){
          queryClient.setQueryData(['diaryList', data.did],undefined);
        }
        queryClient.invalidateQueries('diaryList');
      },    
        onError: (error) => {
        console.log("Mutation failed with error:", error)
        },
       } )
  

const handleDeleteDiary=()=>{
  deleteDiaryMutation.mutate(diary.did)

}










  return(
    <ConfigProvider>
     <Card size="small" id={diary.did} className="bg-slate-300 rounded-lg  h-auto max-w-full" title={diary.diaryDate}>
     {contentList}
     <div className="flex">
      <div onClick={handleDeleteDiary}><DeleteOutlined /></div>
     <div className="ml-2"> <EditOutlined /></div>
     <div className="ml-auto" onClick={clickHeart}>{favoriteState?<HeartFilled/>:<HeartOutlined />}</div> 
      </div>
    </Card>
</ConfigProvider>
  )
}
export default Diary;