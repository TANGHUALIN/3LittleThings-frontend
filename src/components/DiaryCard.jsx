import { HeartFilled,HeartOutlined,DeleteOutlined,EditOutlined,CheckOutlined} from "@ant-design/icons"
import { useTranslation } from "react-i18next";

const DiaryCard=({contentList,handleDeleteDiary,handleEditDiary,clickHeart,favoriteState})=>{
    const {i18n}=useTranslation()
    const layoutClassName = i18n.language === 'jp' ? 'font-noto-jp' : 'font-noto-cn';

    return(
        <div className={layoutClassName}>
        {contentList}
      <div className="flex">
       <div onClick={handleDeleteDiary}><DeleteOutlined className="cursor-pointer hover:text-slate-400" /></div>
      <div className="ml-2" onClick={handleEditDiary}> <EditOutlined className="cursor-pointer hover:text-slate-400"/></div>
      <div className="ml-auto" onClick={clickHeart}>{favoriteState?<HeartFilled className="cursor-pointer "/>:<HeartOutlined className="cursor-pointer"/>}</div> 
       </div>
       </div>
    )
}
export default DiaryCard