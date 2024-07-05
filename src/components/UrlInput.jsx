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

    


    const submit = (data) => {
        const searchedUrl = data.url
        // console.log(userId)
        // console.log(userName)
        // console.log(searchedUrl)
        // console.log(data)
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
                        // alert("data sended")
                        navigate('/scrap')
                    }
                    
                })
                .catch((error)=>console.log(error))
            
            // console.log(content)
            
            
            
        } catch (error) {
            console.log(error)
            setError(error.message)
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

            <Button
            type= "submit"
            className='mb-1'
            >
                Submit
            </Button>
            </form>
        </div>
    </section>
  )
}

export default UrlInput