import { Timeline,ConfigProvider } from 'antd';
import { processEntryReturnP } from '../utils';
import { useInfiniteQuery} from '@tanstack/react-query';
import { fetchDiaryList } from '../queryFN/diaryFN';
import { useInView } from "react-intersection-observer";
import { useEffect,useState } from 'react';
import { useTranslation } from "react-i18next";

const TimelinePage = () => {
  const [diaryList, setDiaryList] = useState([]);
  const { t } = useTranslation();

  const {
    fetchNextPage,
    hasNextPage,
    data,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['diaryList'],
    queryFn: ({ pageParam }) => fetchDiaryList(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.meta.nextPage,
  });

  useEffect(() => {
    if (!isLoading && data && data.pages) {
      const allDiaries = data.pages.flatMap(page => page.data);
      const sortedDiaries = allDiaries.sort((a, b) => new Date(b.diaryDate) - new Date(a.diaryDate));
      setDiaryList(sortedDiaries);
    }
  }, [isLoading, data]);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const timelineItems = diaryList.length > 0 
    ? diaryList.flatMap(diary => {
        if (!diary || !diary.diaryEntry) {
          return []; 
        }

        const entryList = diary.diaryEntry.map(entry => {
          if (!entry) return ''; 
          return `<p>${entry.entryContent}</p>`;
        }).join('');

        return { 
          color: '#718096',
          children: (
            <>
              <p>{diary.diaryDate}</p>
              <div dangerouslySetInnerHTML={{ __html: entryList }} />
            </>
          )
        };
      })
    : [];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: '#000'
        },
        components: {
          Timeline: {
            tailColor: 'rgb(113,128,150,0.1)',
            tailWidth: 2,
          },
        },
      }}
    >
      <div>
        {diaryList.length > 0 ? (
          <Timeline items={timelineItems} className='ml-20' />
        ) : (
          <p>{t('noContentMsg')}</p>
        )}
        <div ref={ref} className='h-0'></div>
      </div>
    </ConfigProvider>
  );
};

export default TimelinePage;