import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <div>
        <header>
          <h1>Gasp</h1>
          <p>Your daily bread</p>
        </header>

        <nav>
          <ul>
            {
              headerMenu.map(
                (element, index) => {
                  return <li>
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
    </div>
  )
}
