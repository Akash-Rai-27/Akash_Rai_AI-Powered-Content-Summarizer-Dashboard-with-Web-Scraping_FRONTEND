import React, { useCallback, useEffect , useState} from 'react'
import { useSelector } from 'react-redux'
import authService from '../appwrite/auth'
import dbService from '../appwrite/db';


function History() {

  const authStatus = useSelector((state) => state.auth.status);
  const userName = useSelector((state) => state.auth.userName);
  const userId = useSelector((state) => state.auth.userId);

  const [post, setPost] = useState();


  

    
    
    
    useEffect(()=>{
      if (authStatus && userId) {
        // console.table(authStatus,userName,typeof userId,post)

          if(userId){

            dbService.getUserData(userId)
              .then((response)=>(setPost(response.documents)
            // console.log('POST ::: ', post)
          ))
            
          }
      }
    },[])
  return (
    authStatus && (
      <section>
        <div className='flex flex-wrap bg-yellow-00 font-mono px-4 py-4'>
            <div className=' flex flex-wrap justify-center w-full text-3xl px-2 py-3 text-emerald-700 font-bold'>User: {userName}</div>
            <div className='flex flex-wrap w-full justify-center border-emerald-700 border-x-2 border-y-2 rounded-xl px-2 py-2 '>
              <h1 className='text-xl px-2 py-1 w-full text-emerald-700 font-extrabold'>History [web scrap]</h1>
              <ul className='bg-green-00 marker:text-gray-50 list-decimal list-inside w-full px-4 py-2 border-teal-800 border-y-2 border-x-2 rounded-md bg-teal-800'>
                {
                  authStatus && post?.map((item)=>(
                    
                      <li className='text-gray-50 py-1 text-wrap' key={item.$createdAt}>{item.searchedUrl}</li>
                  
                  ))
                  
                }
              </ul>
            </div>
        </div>
    </section>
    )
  )
}

export default History