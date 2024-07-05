import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import {Provider} from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthLayout from './components/AuthLayout.jsx'

import Home from './pages/Home.jsx'
import SummaryPage from './pages/SummaryPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ScrapPage from './pages/ScrapPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },

      {
        path: "/login",
        element: (
            <AuthLayout authentication={false}>
                <LoginPage/>
            </AuthLayout>
        )
      },

      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <SignupPage/>
            </AuthLayout>
        )
      },

      {
        path: "/summaryPage",
        element : (
          <AuthLayout authentication >
              <SummaryPage/>
          </AuthLayout>
        )
      },

      {
        path: "/dashboard",
        element : (
          <AuthLayout authentication >
              <Dashboard/>
          </AuthLayout>
        )
      },
      {
        path:"/scrap",
        element : (
          <AuthLayout authentication >
            <ScrapPage/>
          </AuthLayout>
        )
      },
      {
        path:"/summary",
        element : (
          <AuthLayout authentication >
            <SummaryPage/>
          </AuthLayout>
        )
      }

      


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
