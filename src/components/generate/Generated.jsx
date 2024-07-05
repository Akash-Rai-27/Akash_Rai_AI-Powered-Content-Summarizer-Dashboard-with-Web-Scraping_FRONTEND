import React, {useCallback, useEffect, useState, useRef} from 'react'
import { summarizer } from './generateText';
import Button from '../Button';
import { set } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/authSlice';
import Download from '../Download';

function Generated() {
  // const value = JSON.stringify(useSelector((state)=>state.auth.content));
  const value = (useSelector((state)=>state.auth.content));
  const dispatch = useDispatch();

  const [length, setLength] = useState(10);
  const [content, setContent] = useState(value || '');
  const [keywords, setKeywords] = useState('');
  const [summary, setSummary] = useState('')
  const [download, setDownload] = useState(false)


  
  const handleSummarize = () => {
    const summarizerContent = summarizer(length,content,keywords);
    
    setSummary(summarizerContent);
    // console.log(summary)
    setContent(summarizerContent);
    // console.log(content)
    setDownload(false);

    // dispatch(getData(summarizerContent))
   
  }

  const handleDownload = ()=>{
    // dispatch(getData(content));
    setDownload(true)
  }

  


  // useEffect(()=>{
  //   setContent(value? value :'could not process !!')
  // },[value])

  return (
    <section>
      <div className='px-2 py-2'>
        <div className='flex flex-wrap border-emerald-700 border-x-2 border-y-2 rounded-xl justify-center items-center  '>
          <div className='text-2xl font-bold text-emerald-700 py-1 sm:flex sm:flex-wrap sm:justify-center sm:w-full'>
            <h1> AI-Text Summarizer </h1>
          </div>
          <div className='sm:flex sm:flex-wrap sm:justify-center sm:w-full sm:px-4 sm:py-2'>
            <textarea
              value={content}
              rows="12" cols="35"
              onChange={(e)=>(setContent(e.target.value),setDownload(false))}
              className=' border-emerald-700 border-x-2 border-y-2 rounded-md px-1 sm:px-3  bg-teal- text-teal-100 py-4 sm:w-full bg-teal-700 '
            />
          </div>
          <div>
            <input
              type='number'
              value={length}
              min={5}
              onChange={(e)=>setLength(Number(e.target.value))}
              className='border-teal-700 border-x-4 my-2 border-y-2 px-2 py-2 rounded-lg text-teal-800 font-bold'
            />
          </div>
          <div className='w-full px-3 py-1'>
            <input
              type='text'
              value={keywords}
              onChange={(e)=>setKeywords(e.target.value)}
              placeholder='Any Keywords?...'
              className='border-teal-700 border-x-4  border-y-2 px-2 py-2 rounded-lg w-full text-teal-800 font-bold'
            />
          </div>
          <Button onClick={handleSummarize} className=' px-2 my-2 py-2 sm:px-4 sm:py-4 sm:my-4' >Summarize</Button>
        </div>
       

        {!download && <Button  className='mx-2 my-2 px-2 py-2 sm:px-6 sm:py-4 sm:rounded-xl sm:mx-5' onClick={handleDownload}>Download</Button>}
        {download && <Download textContent={content}/>}
      </div>
    </section>
  )
}

export default Generated