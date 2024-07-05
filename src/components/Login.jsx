import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button, Input} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import {Logo} from './index'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const create = async(data)=> {
        setError("")
        try {

            const session = await authService.login(data)
            if(session) {
                const userData = await authService.getCurrentUser()

                if(userData) {
                    dispatch(login(userData));
                    navigate('/dashboard');
                    console.log("nav done")
                }
                    
            }
        } catch (error) {
            setError(error.message);
            console.log(error.message)
        }
    }
  return (
    <div>
        <div className='bg-green-00 px-3 py-2 flex flex-wrap flex-row  h-full'>
            <div className='flex justify-center w-full items-center py-4'>
            <Logo className={'fill-teal-700 '}/>
            </div>
            <h2 className='flex justify-center w-full items-center mb-1 text-teal-700 font-bold'>Login to your Account</h2>
            <p className='flex flex-wrap justify-center items-center w-full text-teal-700 font-bold'>Don&apos;t have any account? &nbsp;
                <Link to='/signup' className='bg-blue-500 text-gray-100 px-2 py-1 rounded-md '>
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-500'>{error}</p>}

            <form onSubmit={handleSubmit(create)} className='sm:flex flex-wrap  sm:w-full sm:justify-center'>
                <div className='px-4 py-1 flex flex-wrap
                sm:flex-col 
                  
                '>
                    <Input
                        label = "Email:"
                        placeholder = "Enter your email"
                        type="email"
                        {...register("email",{
                            required:true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                    />

                    <Input
                        label="Password:"
                        type='password'
                        placeholder="Enter your password"
                        {...register("password",{
                            required:true
                        })}

                        
                    />

                    <Button
                        type='submit'
                        className='mt-2 px-3 py-2'
                    >
                    Login</Button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Login