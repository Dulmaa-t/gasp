import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Sticky from 'react-sticky-el'

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
    <header class="container mainMenu">
        <h1 class="logo">
            <Link to="/" class="logo">Gasp</Link>
        </h1>
        
        <input type="checkbox" class="nav-toggle" id="nav-toggle"/>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
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
        
        
      </header>
   
  )
}
