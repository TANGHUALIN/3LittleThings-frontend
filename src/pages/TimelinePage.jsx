import { Timeline,ConfigProvider } from 'antd';
import { processEntryReturnP } from '../utils';
import { useInfiniteQuery} from '@tanstack/react-query';
import { fetchDiaryList } from '../queryFN/diaryFN';
import TimelineComponent from '../components/TimelineFormat';
import { useInView } from "react-intersection-observer";
import { useEffect,useState } from 'react';
const TimelinePage = () => {
  const [diaryList, setDiaryList] = useState([])

  const {
    fetchNextPage,
    hasNextPage,
    data,
    isLoading
  } = useInfiniteQuery({
    queryKey:['diaryList'],
    queryFn: ({ pageParam}) => fetchDiaryList(pageParam),
    initialPageParam:1,
    getNextPageParam:(lastPage,pages) => lastPage.meta.nextPage
  });

  useEffect(() => {
    if (!isLoading && data) {
      const allDiaries = data.pages.flatMap(page => page.data);
      const sortedDiaries = allDiaries.sort((a, b) => {
        return new Date(b.diaryDate) - new Date(a.diaryDate);
      })
      setDiaryList(sortedDiaries); 
    }
  }, [isLoading, data]);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  const timelineItems = diaryList.flatMap(diary => {
    const entryList = diary.diaryEntry.map(entry => `<p>${entry.entryContent}</p>`).join('');
    const dateItem = { 
      color: '#718096',
      children: (
      <>
        <p className=''>{diary.diaryDate}</p>
        <div dangerouslySetInnerHTML={{ __html: entryList }} />
      </>
    )};
    return [dateItem];
  });
  
  
  return (
    <ConfigProvider
    theme={{
      token:{
        colorText:'#000'
      },
      components: {
        Timeline: {
         tailColor:'rgb(113,128,150,0.1)',
         tailWidth:2,
        },
      },
    }}
  >
    <div>
      <Timeline items={timelineItems} className='ml-20'/>;
      <div ref={ref} className='h-0'></div>
    </div>
    </ConfigProvider>
  );
}

export default TimelinePage;
