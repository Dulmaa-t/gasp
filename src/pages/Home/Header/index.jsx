import React from 'react'
import { NavLink } from 'react-router-dom'
import Sticky from 'react-sticky-el'

export default function index() {
  const headerMenu = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "News",
      href: "/news/"
    },
    {
      title: "Video",
      href: "/video/"
    },
    {
      title: "Podcast",
      href: "/podcast/"
    },
  ]

  const handleClick = (title) => {
    alert("clicked" + title)
  }

  return (
      <Sticky>
        <header>
          <h1>Gasp</h1>
          <p>Your daily bread</p>
        </header>

        <nav>
          <ul>
            {
              headerMenu.map(
                (element, index) => {
                  return <li key={index}>
                    <NavLink
                      to={element.href}
                      // onMouseOver={() => handleClick(element.title)}
                    >
                      {element.title}
                    </NavLink>
                  </li>
                }
              )
            }
          </ul>
        </nav>
    </Sticky>
  )
}
