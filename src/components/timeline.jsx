import { Timeline,ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
const TimelineFormat = () =>{
  const {t}=useTranslation()
const  diary={
  did: 122,
  content: t('diary3'),
  updateTime: '2023-10-1'
}
const lines = diary.content.split('\n');
const contentList = lines.map((line, index) => (
  <li className="p-0 text-left list-disc" key={index}>{line}</li>
));

return (
    <ConfigProvider
  theme={{
    token:{
      colorText:'#FFFFFF'
    },
    components: {
      Timeline: {
       tailColor:'#FFFFFF',
       tailWidth:1,
       itemPaddingBottom:1,
      },
    },
  }}
>
<Timeline
    items={[
      {
        color: '#FFFFFF',
        children: (
          <>
           <p className="p-0 text-left"> {diary.updateTime}</p>
        {contentList}
          </>
        ),
      },  
      {
        color: '#FFFFFF',
        children: (
          <>
           <p className="p-0 text-left"> {diary.updateTime}</p>
        {contentList}
          </>
        ),
      }, 
      {
        color: '#FFFFFF',
        children: (
          <>
           <p className="p-0 text-left"> {diary.updateTime}</p>
        {contentList}
          </>
        ),
      }, 
    ]}
  />
  
</ConfigProvider>
 
);
}
export default TimelineFormat