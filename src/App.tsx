import React from 'react'
import tw from 'twin.macro'
import { Route, Routes } from 'react-router-dom'
import {
  AboutPage,
  HomePage1,
  HomePage2,
  ServicePage,
  SignInPage,
  SignUpPages,
  ToDoListPage,
} from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage1 />}/>
        <Route path="signup" element={<SignUpPages />}/>
        <Route path="signin" element={<SignInPage />}/>
        <Route path="home2" element={<HomePage2 />}/>
        <Route path="about" element={<AboutPage />}/>
        <Route path="service" element={<ServicePage />}/>
        <Route path="todolist" element={<ToDoListPage />}/>
      </Routes>
    </>
  )
}

export default App
