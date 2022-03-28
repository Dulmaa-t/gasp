import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/newsCard'
import Footer from '../Home/Footer'

import MoreBtn from '../../components/special/MoreBtn'

import axios from 'utils/axios'
import { timeZoneToDateString } from 'utils/index'

export default function News() {

  /** news ийн мэдээллийг хадгалах state */
  const [ news, setNews ] = useState([])
  const location = useLocation()

  /** news ийн мэдээллийг back аас дуудах нь */
  const getData = async () =>
  {
    /** url ээс дарагдсан category байгаа эсэхийг анх орохдоо шалгах нь */
    const paramCatName = new URLSearchParams(location.search).get("category")
    await axios.get(`/api/news/${paramCatName ? `?category=${paramCatName}` : ""}`)
      .then(({ success, data, error }) =>
        {
          if (success)
          {
            setNews(data)
          }
        }
      )
      .catch(err =>
        {

        }
      )
  }

  useEffect(
    () =>
    {
      //  news ийн мэдээллийг back аас дуудах нь
      getData()
    },
    []
  )

  /** Ямар category дарагдсан түүнийг авах функц */
  const handleCategory = async (catName) =>
  {
    const { success, data, error } = await axios.get(`/api/news/?category=${catName}`)
    if (success)
    {
      setNews(data)
    }
  }

  return (
    <div>
      <HeaderMenu handleCategory={handleCategory} />
      <div className="news-menu">
        <div className="content-wrapper">
          {
            news.map(
              (element, index) => {
                return (
                  <Card
                    key={index}
                    id={element._id}
                    image={element.image}
                    title={element.title}
                    text={element.text}
                    createdAt={timeZoneToDateString(element.createdAt)}
                  />
                )
              }
            )
          }
        </div>
      </div>
      <MoreBtn />
      <Footer />
    </div>
  )
}
