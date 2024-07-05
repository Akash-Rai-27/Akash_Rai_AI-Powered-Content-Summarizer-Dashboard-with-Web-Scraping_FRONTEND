import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from  'react-hook-form'
import {Button, Input, Logo} from './index.js'
import authService from '../appwrite/auth.js'
import { login } from '../store/authSlice.js'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)

            if(userData) {
                const userData = await authService.getCurrentUser()

                if(userData) dispatch(login(userData));

                navigate('/dashboard');
                console.log("nav done")
            }
        } catch (error) {
            console.log("Error :: Signup :: component",error)
            setError(error.message)
        }
    }

  return (
    <div className='bg-gray-00 px-3 py-2 flex flex-wrap flex-row w-full h-full'>
        <div className='flex justify-center w-full items-center py-4'>
            <Logo className={'fill-teal-700 '}/>
        </div>
        <h2 className='flex justify-center w-full items-center mb-1 text-teal-700 font-bold'>Sign up to create Account</h2>
        <p className='flex flex-wrap justify-center items-center w-full text-teal-700 font-bold'>Already have an account? &nbsp;
            <Link 
                to="/login" className='bg-blue-500 text-gray-100 px-2 py-1 rounded-md '
            >
                Login
            </Link>
        </p>

        {error && <p className='text-red-500'>{error}</p>}

        <form onSubmit={handleSubmit(create)}
            className='sm:flex flex-wrap  sm:w-full sm:justify-center'
        >
            <div className='px-4 py-1 flex flex-wrap
                sm:flex-col '>
                <Input
                    label = "Full Name:"
                    placeholder = "Enter Your Full Name"
                    {...register("name",{
                        required: true,
                    })}
                />

                <Input
                    label="Email:"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required:true,
                        validate : {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                        }
                    })}
                />

                <Input
                    label="Password:"
                    type="password"
                    placeholder="Create a password"
                    {...register("password",{
                        required:true
                    })}
                />

                <Button
                    type="submit"
                    className='mt-2 px-3 py-2'
                >Create Account</Button>
            </div>
        </form>
    </div>
  )
}

export default Signup