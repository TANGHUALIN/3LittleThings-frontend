import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined} from "@ant-design/icons"
import { Card, ConfigProvider } from "antd";
import { processEntryReturnLi,processContentReturnLi } from "../utils/contentProcess";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavoriteStateAPI } from "../apis/diaryAPI";
import { fetchFavoriteState, updateFavoriteState } from "../store/modules/diary";
import { useParams } from "react-router-dom";

const Diary=({diary})=>{
  const dispatch=useDispatch()
  const[favoriteState,setFavoriteState]=useState(diary.favoriteState)
  const clickHeart=async()=>{
    console.log("heart clicked")
    const res=await dispatch(fetchFavoriteState(!favoriteState,diary.did))
      if(res.status===200){
        setFavoriteState(!favoriteState)
      }
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