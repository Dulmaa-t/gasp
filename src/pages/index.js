import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useConfig } from 'context/configContext'

import Home from './Home'
import News from './News/'
import Video from './Video'
import Podcast from './Podcast'
import Admin from './Admin'

export default function Page() {

  const [ isLoading, setLoading ] = useState(true)
  const { getConfigs } = useConfig()

  /** Сайтад хэрэгтэй утгуудыг веб уншихаас өмнө татаж авах */
  const getDatas = async () =>
  {
    /** Тохиргооны мэдээллийг дуудна */
    await getConfigs()
    setLoading(false)
  }

  useEffect(
    () =>
    {
      getDatas()
    },
    []
  )

  if (isLoading)
  {
    return "Уншиж байна"
  }

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
