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
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">
          <a href="#">Gasp</a>
          <p>Your daily bread</p>
        </h1>

      </div>
      <ul className="footer__nav">
        {
          footer.map(
            (element, index) => {
              return (
                <Card key={index} title={element.title} menus={element.menus} />
              )
            }
          )
        }
      </ul>
    </footer>
  )
}
