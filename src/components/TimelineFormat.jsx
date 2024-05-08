import { Timeline,ConfigProvider } from 'antd';
import { processEntryReturnP } from '../utils';
const TimelineComponent = ({diary}) =>{
let contentList
if (diary.diaryEntry) {
  contentList = diary.diaryEntry.map((entry) => (
    {
      children: entry.Content,
    }
  ))
} else {
  contentList = null;
}

return (
    <ConfigProvider
  theme={{
    token:{
      colorText:'#000'
    },
    components: {
      Timeline: {
       tailColor:'rgba(90, 100, 5,1)',
       tailWidth:5,
       itemPaddingBottom:1,
      },
    },
  }}
>{

  <Timeline color='#718096'
 items={[
      {
        color: '#718096',
        children: (
          <>
           <p className="p-0 text-left"> {diary.diaryDate}</p>
          </>
        ),
      }, 
 ]}
  />




}

  
</ConfigProvider>
 
);
}
export default TimelineComponent;