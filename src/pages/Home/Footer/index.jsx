import React from 'react'
import Card from '../../../components/main/footer'

export default function index() {
  const footer = [
    {
      title: "Байршил",
      menus: [
        {
          subtitle: "Хаяг",
          text: "Улаанбаатар, Хан-Уул дүүрэг 3-р хороо, 57-114 тоот"
        }
      ]
    },
    {
      title: "Шуудан хаяг",
      menus: [
        {
          subtitle: "Мэйл",
          text: " info@altaisoft.mn"
        },
        {
          subtitle: "Сайт",
          text: " www.Gasp.mn"
        },
      ]
    },
    {
      title: "Холбоо барих",
      menus: [
        {
          subtitle: "Утас",
          text: "7016-1914"
        },
        {
          subtitle: "Гар утас",
          text: "9999-9999"
        },
      ]
    },
  ]

  return (
    <footer>
      <div className='footer-mainbar row'>
        <div className="footer-content">
          <div className="footer-text">
            <a href="#">Gasp</a>
            <p>Your daily bread</p>
          </div>
        </div>
        <div className='row' style={{ margin: "0 auto" }}>
        {
          footer.map(
            (element, index) => {
              return (
                <Card key={index} title={element.title} menus={element.menus} />
              )
            }
          )
        }
      </div>
      </div>
    </footer>
  )
}
