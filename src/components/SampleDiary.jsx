import { Card } from "antd"
import DiaryCard from "./DiaryCard"
import { processContentReturnLi } from "../utils"
const SampleDiary=({diary})=>{
   const list= processContentReturnLi(diary.content)
    return (
<Card size="small" id={diary.did} className="bg-slate-300 rounded-lg  h-auto max-w-full text-center" title={diary.diaryDate}>
<DiaryCard 
  contentList={list}
  handleDeleteDiary={undefined}
handleEditDiary={undefined}
clickHeart={undefined}
favoriteState={undefined}
 />
</Card>
    )
}
 export default SampleDiary
