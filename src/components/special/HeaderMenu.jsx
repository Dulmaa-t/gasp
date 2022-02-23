import React from 'react'

import Header from './Header'
import SubMenu from './SubMenu'

export default function HeaderMenu() {
    return (
        <div>
            <Header />
            <div class="header">
                <img class="header-img" src="/static/image/1.jpg" alt="Card image cap" />
            </div>
            <SubMenu />
        </div>
    )
}
