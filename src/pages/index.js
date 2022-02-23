import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Button from '../components/main/Button'
import Home from './Home'
import Header from './Home/Header'
import News from './News'
import Video from './Video'
import Podcast from './Podcast'


export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/' element={<News />} />
        <Route path='/video/' element={<Video />} />
        <Route path='/podcast/' element={<Podcast />} />
      </Routes>
    </BrowserRouter>
  )
}
