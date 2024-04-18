import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined} from "@ant-design/icons"
import { Card, ConfigProvider } from "antd";
import { processEntryReturnLi,processContentReturnLi } from "../utils/contentProcess";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Diary=({diary})=>{
  const{favoriteState,setFavoriteState}=useState(diary.favoriteState)
  const dispatch=useDispatch()
  const clickHeart=()=>{
    favoriteState===true?setFavoriteState(false):setFavoriteState(true)
   }
  let contentList;
  if(diary.diaryEntry){
  contentList = processEntryReturnLi(diary.diaryEntry)}else if(diary.content){
    contentList=processContentReturnLi(diary.content)
  }else{ contentList=null }
  return(
    <ConfigProvider>
     <Card size="small" id={diary.did} className="bg-slate-300 rounded-lg  h-auto max-w-full" title={diary.diaryDate}>
     {contentList}
     <div className="flex">
      <div ><DeleteOutlined /></div>
     <div className="ml-2"> <EditOutlined /></div>
     <div className="ml-auto" onClick={clickHeart}>{favoriteState?<HeartFilled/>:<HeartOutlined />}</div> 
      </div>
    </Card>
</ConfigProvider>
  )
}
export default Diary;