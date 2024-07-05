import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import {Button,Input} from './index'
import { useDispatch } from 'react-redux';
import { getData } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
function TextInput() {

    const [error, setError] = useState('');
    const {register,handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const submit = (data) => {
       if(data){

           dispatch(getData(data.text));
           navigate('/summary');
       }

        
    }


  return (
    <section>
        <div className='bg-gray-00 flex flex-wrap px-3 py-3 '>
            <form onSubmit={handleSubmit(submit)}>
                {/* <Input
                    
                    placeholder = "paste your content here..."
                    {...register("text",{
                        required:true
                    })}

                    className = "min-h-56"
                /> */}

                <label
            htmlFor="text"
            className='px-2 text-xl text-emerald-700 font-bold'
            >
                Text-Area
            </label>
                <textarea
                    rows="12" cols="35"
                    placeholder='Paste / Write here your text'
                    className='border-emerald-700 border-x-2 border-y-2
                    w-full px-4 py-1 mb-2 rounded-lg
                    sm:shadow-[10px_10px_#115e59] focus:shadow-none transition-shadow 

                    '


                    {...register("text",{
                        required:true
                    })}

                    
                >

                </textarea>

                <Button
                type='submit'
                className='mb-1 ml-36 px-2 py-2  '
                >
                    Submit
                </Button>
            </form>
        </div>
    </section>
  )
}

export default TextInput