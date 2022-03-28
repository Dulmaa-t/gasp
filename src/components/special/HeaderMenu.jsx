import React from 'react'

import Header from './Header'
import SubMenu from './SubMenu'

export default function HeaderMenu({ handleCategory })
{

    return (
        <div>
            <Header />
            <div className="header">
                <img className="header-img" src="/static/image/1.jpg" alt="Card image cap" />
            </div>
            <SubMenu handleCategory={handleCategory}/>
        </div>
    )
}
