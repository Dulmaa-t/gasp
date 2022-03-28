import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import Header from 'components/special/Header'
import Footer from "pages/Home/Footer"

import axios from 'utils/axios'

export default function NewsAbout() {

  const [ about, setAbout ] = useState({})
  const { newsId } = useParams()

  /** мэдээний дэлгэрэнгүй авах */
  const getNewsAbout = async () =>
  {
    const { success, data, error } = await axios.get(`/api/news/${newsId}/`).catch(err => err)
    if (success)
    {
      setAbout(data)
      /** мэдээний html ийг div дээр харуулах */
      const element = document.getElementById("main-news")
      element.innerHTML = data.news
    }
    else {
      toast(
        {
          data: "Ийм мэдээ байхгүй эсвэл алдаа гарсан байна",
          type: "danger"
        }
      )
    }
  }

  /** анх ороод мэдээний мэдээлэл авах */
  useEffect(() => {
    getNewsAbout()
  }, [])

  return (
    <>
      <Header />
      <div className='header'>
        <img className="header-img" src="/static/image/1.jpg" alt="Card image cap"></img>
      </div>
      <h1 className='text-center'>
        {about.title}
      </h1>
      <div id='main-news'>
      </div>
      <Footer />
    </>
  )
}
