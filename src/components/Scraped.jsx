import React from 'react'

import {useCallback, useEffect, useState, useRef} from 'react'

import Button from './Button';
import { set } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
// import { getData } from '../../store/authSlice';
import Download from './Download';

function Scraped() {
    const value = JSON.stringify(useSelector((state)=>state.auth.content));
    // const value = (useSelector((state)=>state.auth.content));
    const dispatch = useDispatch();
  
    const [content, setContent] = useState(value || '');
    const [download, setDownload] = useState(false)
  
  
  
  
    const handleDownload = ()=>{
      // dispatch(getData(content));
      setDownload(true)
    }
  
    
  

    return (
      <section>
        <div className='px-2 py-4 my-6'>
          <div className='flex flex-wrap border-emerald-700 border-x-2 border-y-2 rounded-xl justify-center items-center py-4 sm:py-5'>
            <div className='text-2xl font-bold text-emerald-700 py-1 sm:flex sm:flex-wrap sm:justify-center sm:w-full'>
              <h1>Web-Scraped Content</h1>
            </div>
            <div className='sm:flex sm:flex-wrap sm:justify-center sm:w-full sm:px-4 sm:py-2 '>
              <textarea
                value={content}
                rows="12" cols="35"
                onChange={(e)=>(setContent(e.target.value),setDownload(false))}
                className=' border-emerald-700 border-x-2 border-y-2 rounded-md px-1 sm:px-3  bg-teal- text-teal-100 py-4 sm:w-full bg-teal-700 '
              />
            </div>
            
          </div>
         
  
          {!download && <Button  className='mx-2 my-2 px-2 py-2 sm:px-6 sm:py-4 sm:rounded-xl sm:mx-5' onClick={handleDownload}>Download</Button>}
          {download && <Download textContent={content}/>}
        </div>
      </section>
    )
  }

export default Scraped