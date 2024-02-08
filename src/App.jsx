import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },

  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>


  )
}

export default App
