import { HeartFilled,HeartOutlined } from "@ant-design/icons"
import { Card } from "antd";
import { processContentReturnLi } from "../utils";

const Diary=({diary})=>{
  const {did,content,updateTime}=diary
  const contentList = processContentReturnLi(content)
  return(
    <div>
     <Card size="small" className=" bg-slate-200 rounded-lg h-full w-40" title={updateTime}>
     {contentList}
    </Card>
</div>
  )
}
export default Diary;