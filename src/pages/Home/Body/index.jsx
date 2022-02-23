import React from 'react'
import Card from '../../../components/main/card'

import News from './News'
import SideSection from './SideSection'

export default function index() {

  /** Back aac irsen data */
  const cards = [
    {
      image: "/static/image/3.jpg",
      color: "primary",
      title: "Crystal Card",
      text: "Crystal CardLorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/7.jpg",
      color: "secondary",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
    {
      image: "/static/image/9.jpg",
      color: "success",
      title: "Crystal Card",
      text: "Lorem ipsum dolor sit amet, consectetur adiscing elit. Aenean leo urna, tempor non neque vel, ruteum tempus ligula. Maecenas accumsan varius elit sit amet posuere."
    },
  ]

  return (
    <div>
      <div class="side-section" id="3">
        <div class="container">
          <div class="row">
            <div class="card">
              <div class="text">
                <h5 class="text-title" style={{ marginTop: "15px" }}>
                  Thinking
                </h5>
                <h5 class="text-title">
                  differently
                </h5>
                <div class="text-about">
                  <p>Вэб сайтын аюулгүй байдал, үр ашиг, хэрэглэгчдийн ажиллагааг хөнгөвчилсөн, оновчтой шийдэлд анхааран, төслийн хугацаа, өртөгийг харилцагчийнхаа шаардлагад нийцүүлэн шийдвэрлэнэ.</p>
                </div>
                <span>
                  <a href="#" class="button">Link Button</a>
                </span>
              </div>
            </div>
            <img src="/static/image/5.jpg" alt="" class="right-content" />
          </div>
        </div>
      </div>
      <main>
        <div className='wrapper'>
          {
            cards.map(
              (element, index) => {
                return (
                  <Card image={element.image} title={element.title} text={element.text} color={element.color} />
                )
              }
            )
          }
        </div>
        <News />
        <SideSection />
      </main>
    </div>

  )
}
