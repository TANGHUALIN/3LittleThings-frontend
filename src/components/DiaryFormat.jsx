import { HeartFilled,HeartOutlined } from "@ant-design/icons"
import { Card, ConfigProvider } from "antd";
import { processEntryReturnLi,processContentReturnLi } from "../utils/contentProcess";

const Diary=({diary})=>{
  let contentList;
  if(diary.diaryEntry){
  contentList = processEntryReturnLi(diary.diaryEntry)}else if(diary.content){
    contentList=processContentReturnLi(diary.content)
  }else{ contentList=null }
  return(
    <ConfigProvider>
     <Card size="small" id={diary.did} className="bg-slate-300 rounded-lg  h-auto max-w-full" title={diary.diaryDate}>
     {contentList}
    </Card>
</ConfigProvider>
  )
}
export default Diary;