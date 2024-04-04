import { HeartFilled,HeartOutlined } from "@ant-design/icons"
import { Card, ConfigProvider } from "antd";
import { processContentReturnLi } from "../utils";

const Diary=({diary})=>{
  const {did,content,updateTime}=diary
  const contentList = processContentReturnLi(content)
  return(
    <ConfigProvider>
    <div>
     <Card size="small" className="bg-slate-300 rounded-lg  h-auto max-w-full" title={updateTime}>
     {contentList}
    </Card>
</div>
</ConfigProvider>
  )
}
export default Diary;