import React, { useEffect } from 'react'

import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/NewsAbout'
import Footer from '../Home/Footer'

import Button from '../../components/main/Button'
import MoreBtn from '../../components/special/MoreBtn'
import axios from 'axios'

export default function News() {

  /** enw bol card nii meedeelel */
  const newsCards = [
    {
      image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      createdAt: "Jan 29 2018",
      text: "Crystal CardLorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    }
  ]
  
  const articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    }
  ]

  return (
    <div>
      <HeaderMenu />
      <div className="news-menu">
        <div className="content-wrapper">
          {
            newsCards.map(
              (element, index) => {
                return (
                  <Card key={index} image={element.image} title={element.title} text={element.text} />
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
