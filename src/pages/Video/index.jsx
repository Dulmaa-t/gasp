import React from 'react'
import Footer from '../Home/Footer'
import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/video'
import Button from '../../components/main/Button'

import MoreBtn from '../../components/special/MoreBtn'

export default function video() {
  const video = [
    {
      image: "https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Crystal CardLorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/9.jpg",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/9.jpg",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
  ]

  return (
    <div>
      <HeaderMenu />
      <div class="video-menu">
        <div class="container">
          <div class="row nowrap" style={{ flexWrap:"nowrap" }}>
            {
              video.map(
                (element, index) => {
                  return (
                    <Card image={element.image} title={element.title} text={element.text} />
                  )
                }
              )
            }
          </div>

          <div class="row">
            {
              video.map(
                (element, index) => {
                  return (
                    <Card image={element.image} title={element.title} text={element.text} />
                  )
                }
              )
            }
          </div>

          <div class="row">
            {
              video.map(
                (element, index) => {
                  return (
                    <Card image={element.image} title={element.title} text={element.text} />
                  )
                }
              )
            }
          </div>

          <div class="row">
            {
              video.map(
                (element, index) => {
                  return (
                    <Card image={element.image} title={element.title} text={element.text} />
                  )
                }
              )
            }
          </div>
        </div>
      </div>
      <MoreBtn />
      <Footer />
    </div>
  )
}