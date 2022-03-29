import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Footer from '../Home/Footer'
import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/video'

import MoreBtn from '../../components/special/MoreBtn'

import axios from 'utils/axios'

export default function CVideo()
{

  /** video ийн мэдээллийг хадгалах state */
  const [ videos, setVideos ] = useState([])
  const location = useLocation()

  /** podcast ийн мэдээллийг back аас дуудах нь */
  const getData = async () =>
  {
    /** url ээс дарагдсан category байгаа эсэхийг анх орохдоо шалгах нь */
    const paramCatName = new URLSearchParams(location.search).get("category")
    await axios.get(`/api/video/${paramCatName ? `?category=${paramCatName}` : ""}`)
      .then(({ success, data, error }) =>
        {
          if (success)
          {
            setVideos(data)
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
      //  video ийн мэдээллийг back аас дуудах нь
      getData()
    },
    []
  )

  /** Ямар category дарагдсан түүнийг авах функц */
  const handleCategory = async (catName) =>
  {
    const { success, data, error } = await axios.get(`/api/video/?category=${catName}`)
    if (success)
    {
      setVideos(data)
    }
  }

  return (
    <div>
      <HeaderMenu handleCategory={handleCategory} />
      <div className="video-menu">
        <div className="container">
          <div className="row nowrap">
            {
              videos.map(
                (element, index) => {
                  return (
                    <div className='col-md-3'>
                      <Card
                        key={index}
                        image={element.image}
                        title={element.title}
                        text={element.text}
                        url={element.url}
                        createdAt={element.createdAt}
                      />
                    </div>
                  )
                }
              )
            }
            {
              // хэрэв video байхгүй бол
              videos.length === 0
              ?
                <div style={{ display: "flex", justifyContent: "center" }}>Хоосон байна</div>
              :
                null
            }
          </div>
        </div>
      </div>
      <MoreBtn />
      <Footer />
    </div>
  )
}
