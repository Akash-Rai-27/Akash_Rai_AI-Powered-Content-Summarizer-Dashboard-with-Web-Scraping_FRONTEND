import React, { useEffect, useState } from 'react'
import { Container, Download, Generated, History, Original, TextInput, UrlInput } from '../components'
import {Landing} from './pageIndex'

import { useDispatch, useSelector } from 'react-redux'
import Dashboard from './Dashboard'

import  appwriteService from '../appwrite/auth'
import { set } from 'react-hook-form'
import { login } from '../store/authSlice'


function Home() {
  const authStatus = useSelector((state)=>state.auth.status)
  
 if(authStatus){
  return(
    <Dashboard/>
  )
 }
 return (
  <Landing/>
  // <Generated/>

 )
 

}

export default Home



{/* <div>Home</div> */}
      {/* <UrlInput /> */}
      {/* <TextInput/> */}
      {/* this is history section */}
      {/* <History/> */}
      {/* <Original/> */}
      {/* <Download/> */}
      {/* <Landing/> */}