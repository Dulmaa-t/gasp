import React, { useEffect } from 'react'

import HeaderMenu from '../../components/special/HeaderMenu'
import Card from '../../components/main/newsCard'
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

  useEffect(() => 
  {
    axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-02-23&sortBy=popularity&apiKey=d02d61bb60eb42c7b7dc345b2e357507")
      .then(rsp =>
        {
          console.log(rsp);
        })
    alert("1 udaa")
  }, [])

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
