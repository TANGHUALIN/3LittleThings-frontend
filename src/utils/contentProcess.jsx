function processEntryReturnLi(diaryEntry) {
    if (!Array.isArray(diaryEntry)) {
        console.error("diaryEntry should be an array.");
        return null;
      }
    
      const contentList = diaryEntry.map((entry) => (
        <li className="list-disc text-left" key={entry.eid}>{entry.entryContent}</li>
      ));
      
      return contentList;
}
function processContentReturnLi(content) {
    const lines = content.split('\n');
    const contentList = lines.map((line,index) => (
        <li className="list-disc text-left" key={index}>{line}</li>
      ));
      return contentList;
}
function processContentReturnP(content) {
    const lines = content.split('\n');
    const contentList = lines.map((line, index) => (<p className="text-left p-0 m-0  text-slate-500" key={index}>{line}</p>));
    return contentList;
}
export{
    processContentReturnLi,
    processContentReturnP,
    processEntryReturnLi
}

