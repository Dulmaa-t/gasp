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
    <div>
      <div className='headerImg'>
        <h1>Gasp</h1>
        <p>Your daily bread</p>

      </div>
      <Sticky>
        <header class="container mainMenu position-relative">
          <h1 class="logo">
            <a href="index.html" class="logo">Gasp</a>
          </h1>

          <input type="checkbox" class="nav-toggle" id="nav-toggle" />
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
              <li>
                <div class="searchbar">
                  <input type="text" placeholder="search" />
                  <div class="icon">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
              </li>
              <ul className='icon'>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="fab fa-youtube"></i>
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
