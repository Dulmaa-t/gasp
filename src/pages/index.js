import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import News from './News/'
import Video from './Video'
import Podcast from './Podcast'
import Admin from './Admin'

export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/*' element={<News />} />
        <Route path='/video/' element={<Video />} />
        <Route path='/podcast/' element={<Podcast />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
