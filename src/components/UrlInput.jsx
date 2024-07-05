import React, { useState } from 'react'
import conf from '../conf/conf';
import axios from 'axios'
import {Input} from './index';
import { useForm } from 'react-hook-form';
import {Button} from './index';
import { useSelector,  useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import dbService from '../appwrite/db';
import { getData } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function UrlInput() {
    const [error , setError] = useState();
    const {register, handleSubmit} = useForm();

    const userId = String(useSelector((state)=>state.auth.userId))
    const userName = useSelector((state)=>state.auth.userName)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false); 

    


    const submit = (data) => {
        const searchedUrl = data.url
        // console.log(userId)
        // console.log(userName)
        // console.log(searchedUrl)
        // console.log(data)
        setLoading(true);
        try {
            // axios.get('https://api.github.com/users/Akash-Rai-27')
            axios.get(`https://scrape.abstractapi.com/v1/?api_key=${conf.abstractApiKey}&url=${searchedUrl}`)
                .then((response)=>{
                    const content = response.data
                    // console.log(content)
                    // console.log(content.data)
                    dispatch(getData(content))
                    if(response.data){
                        dbService.createUserData({userId,userName,searchedUrl})
                        setLoading(false);
                        // alert("data sended")
                        navigate('/scrap')
                    }
                    
                })
                .catch((error)=>console.log(error))
            
            // console.log(content)
            
            
            
        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading(false);
        }
    }
  return (
    <section>
        <div className='bg-gray-00 flex flex-wrap px-6 py-3 rounded-lg'>
            <form onSubmit={handleSubmit(submit)}>
            <Input
                label="URL:"
                placeholder="Paste / Write your website url here"
                className = "mb-2 "
                
                
                {...register("url",{
                    required: true,
                    validate: {
                        matchPatern : (value) => /^(https?:\/\/)?((([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,})|localhost)(:\d{2,5})?(\/[^\s]*)?$/.test(value) || "url must be valid address"
                    }
                })}
            />

            {error && (<p className='text-red-500 text-lg'>{error}</p>)}

            {!loading && (<Button
            type= "submit"
            className='mb-1'
            >
                Submit
            </Button>)}
            {loading && (
                <p className='text-teal-700 text-xl font-bold animate-pulse transition-all duration-200'>Processing...</p>
            )}
            </form>
            {/* {loading && (<span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-teal-600"></span>
            </span>)} */}
        </div>
    </section>
  )
}

export default UrlInput