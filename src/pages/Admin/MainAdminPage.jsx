import React from 'react'

export default function MainAdminPage() {
  return (
      <>
        <div className="header l-header">
            <div className="l-header__inner clearfix">
                <div className="c-header-icon js-hamburger">
                    <div className="hamburger-toggle">
                        <span className="bar-top">

                        </span>
                        <span className="bar-mid">

                        </span>
                        <span className="bar-bot">

                        </span>
                    </div>
                </div>
                <div className="c-header-icon has-dropdown">
                    <span className="c-badge c-badge--red c-badge--header-icon animated swing">
                        4
                    </span>
                    <i className="fa fa-bell"></i>
                    <div className="c-dropdown c-dropdown--notifications">
                        <div className="c-dropdown__header"></div>
                        <div className="c-dropdown__content"></div>
                    </div>
                    <div className="c-search">
                        <input type="text" className="c-search__input" placeholder='Search...' />
                    </div>
                    <div className="header-icons-group">
                        <div className="c-header-icon basket">
                            <span className="c-badge c-badge--blue c-badge--header-icon animated swing">3</span>
                            <i className="fa fa-shopping-basket"></i>
                        </div>
                        <div className="c-header-icon logout">
                            <i className="fa fa-power-off"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="l-sidebar">
            <div className="logo">
                <div className="logo__txt">D</div>
            </div>
        </div>
        <div className="l-sidebar__content">
            <nav className="c-menu js-menu">
                <ul className="u-list">
                    <li className="c-menu__item is-active">
                            <div className="c-menu__item__inner">
                                <i className="fa fa-plane"></i>
                                <div className="c-menu-item__title">
                                    <span>
                                        Flight
                                    </span>
                                </div>
                            </div>
                    </li>
                </ul>
            </nav>
        </div>
        <main className="l-main">
            <div className="content-wrapper content-wrapper--with-bg">
                <h1 className="page-title">
                    DashBoard
                </h1>
                <div className="page-content">
                    Content geos here
                </div>
            </div>
        </main>
      </>
  )
}
