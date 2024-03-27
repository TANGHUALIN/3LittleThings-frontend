import React from 'react';
import { ConfigProvider,Calendar, theme } from 'antd';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';
import dayjs from 'dayjs';
dayjs.locale('jp');
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const CalendarComponent = () => {
   
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
 
    
           <ConfigProvider
    theme={{
      components: {
        Calendar: {
            fullBg:'52575D',
            itemActiveBg:'FFFFFF',
          },
      },
    }}
  > <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}  
      /></div>
       </ConfigProvider>
   
   
  );
};
export default CalendarComponent ;