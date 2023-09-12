import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Tech from './components/Tech'
import './scss/index.scss'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='/' element={<About />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/skills' element={<Tech />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contacts' element={<Contact />} />
      <Route path='*' element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode >
)
