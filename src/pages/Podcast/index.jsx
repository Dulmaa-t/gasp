import React, { useState, useEffect } from 'react'

import Footer from '../Home/Footer'
import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/podcastCard'
import MoreBtn from '../../components/special/MoreBtn'

import axios from 'utils/axios'
import { timeZoneToDateString, msToTime } from 'utils/index'

export default function PodcastCard() {

  /** podcast ийн мэдээллийг хадгалах state */
  const [ podcastCard, setPodcast ] = useState([])

  /** podcast ийн мэдээллийг back аас дуудах нь */
  const getData = async () =>
  {
    await axios.get('/api/podcast/')
      .then(({ success, data, error }) =>
        {
          if (success)
          {
            setPodcast(data)
          }
        }
      )
      .catch(err =>
        {

        }
      )
  }

  console.log(podcastCard);

  useEffect(
    () =>
    {
      //  podcast ийн мэдээллийг back аас дуудах нь
      getData()
    },
    []
  )

  return (
    <div>
      <HeaderMenu />
        <section className="dark">
          <div className="container py-4">
            {
              podcastCard.map(
                (element, index) => {
                  return (
                    <Card
                      key={index}
                      image={process.env.REACT_APP_SERVER_URL + element.image}
                      title={element.title}
                      dateTime={timeZoneToDateString(element.createdAt)}
                      clock={msToTime(3600000)}
                      text={element.text}
                    />
                  )
                }
              )
            }
          </div>

        </section>
      <MoreBtn />
      <Footer />
    </div>
  )
}
