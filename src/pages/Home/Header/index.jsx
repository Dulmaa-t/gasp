import React from 'react'
import { NavLink } from 'react-router-dom'
import Sticky from 'react-sticky-el'

import Search from 'components/main/search'

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
      <div className='headerImg'>
        <h1>Gasp</h1>
        <p>Your daily bread</p>

      </div>
      <Sticky className='header-zindex'>
        <header className="container mainMenu position-relative">
          <h1 className="logo">
            <a href="index.html" className="logo">Gasp</a>
          </h1>

          <input type="checkbox" className="nav-toggle" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
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
              <li>
                <Search />
              </li>
              <ul className='icon'>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
        </header>
      </Sticky>
    </div>
  )
}
