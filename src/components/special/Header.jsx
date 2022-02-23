import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
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
      <nav>
          <ul>
            <li><a href="" class="logo">Gasp</a></li>
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
