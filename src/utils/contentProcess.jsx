function processContentReturnLi(content) {
  const lines = content.split('\n');
  const contentList = lines.map((line, index) => (
    <li className="list-disc text-left" key={index}>{line}</li>))
    return contentList;
}
function processContentReturnP(content) {
    const lines = content.split('\n');
    const contentList = lines.map((line, index) => (<p className="text-left p-0 m-0 text-2xl" key={index}>{line}</p>));
    return contentList;
}
export{
    processContentReturnLi,
    processContentReturnP
}

