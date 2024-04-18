import dayjs from 'dayjs';
import { ConfigProvider, Calendar } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiaryList, setDiaryList } from '../store/modules/diary';
import i18n from '../i18n/i18n';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import 'dayjs/locale/zh-cn';


const CalendarComponent = () => {
  const dispatch = useDispatch();
  const diaries = useSelector(state => state.diary.diaryList);
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
    if (value !== null) {
      const existingDiaryIndex = diaries.findIndex(
        diary => diary.date === value
      );
      if (existingDiaryIndex !== -1) {
        dispatch(setDiaryList(diaries[existingDiaryIndex]));
      }
    } else {
      dispatch(fetchDiaryList());
    }
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
