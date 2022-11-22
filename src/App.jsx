import '../src/styles/main.css'

import { Register }  from './pages/register'

import {createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'
import { Login } from './pages/login'
import { Profile } from './pages/profile'

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
