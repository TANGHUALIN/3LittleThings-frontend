import dayjs from 'dayjs';
import { ConfigProvider, Calendar } from 'antd';
import { useEffect } from 'react';
import i18n from '../i18n/i18n';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh-cn';


const CalendarComponent = () => {
  const currentLanguage = i18n.language;

  useEffect(() => {
    switch (currentLanguage) {
      case 'jp':
        dayjs.locale('ja');
        break;
      case 'cn':
        dayjs.locale('zh-cn');
        break;
      default:
        dayjs.locale('en');
        break;
    }
  }, [currentLanguage]);

  const onChange = (value) => {
 
  };

  return (
    <ConfigProvider
      locale={currentLanguage === 'cn' ? "zh_CN" : currentLanguage === 'jp' ? "ja_JP" : "en_US"}
      theme={{
        color: {
          primary: '#718096',
        },
        datePicker: {
          activeBorderColor: '#718899',
        },
      }}
    >
      
      <Calendar fullscreen={false} onChange={onChange} />
    </ConfigProvider>
  );
};

export default CalendarComponent;
