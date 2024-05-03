import { Timeline,ConfigProvider } from 'antd';
import { processEntryReturnP } from '../utils';
const TimelineComponent = ({diary}) =>{
let contentList
if(diary.diaryEntry){
  contentList = processEntryReturnP(diary.diaryEntry)}
  else{ contentList=null }

return (
    <ConfigProvider
  theme={{
    token:{
      colorText:'#000'
    },
    components: {
      Timeline: {
       tailColor:'#000',
       tailWidth:1,
       itemPaddingBottom:1,
      },
    },
  }}
>
<Timeline
    items={[
      {
        color: '#000',
        children: (
          <>
           <p className="p-0 text-left"> {diary.diaryDate}</p>
        {contentList}
          </>
        ),
      },  
    
   
    ]}
  />
  
</ConfigProvider>
 
);
}
export default TimelineComponent;