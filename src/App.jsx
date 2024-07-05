import { Outlet } from "react-router-dom"
import Footer from "./Footer.jsx/Footer"
import Header from "./Header/Header"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import {login, logout} from './store/authSlice'
import dbService from '../appwrite/db';
import {setPost} from './store/authSlice'


function App() {

  const[loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData) {
          dispatch(login({userData}))
          dbService.getUserData(userData.$id)
              .then((response)=>(setPost(response.documents)
            // console.log('POST ::: ', post)
          ))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))
  })
  

  return !loading ? (
    <div>
      <div className="font-mono">
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
