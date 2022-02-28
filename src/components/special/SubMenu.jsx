import React from 'react'

import Button from '../main/Button'

export default function SubMenu() {

  const menus = 
  [
    {
      title: "",
      id: ""
    }
  ]

  return (
    <div  className="sub-menu">
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="Tech" />
      </div>
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="Science"/>
      </div>
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="History"/>
      </div>
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="Art"/>
      </div>
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="Health"/>
      </div>
      <div className="sub-menu-nav">
        <Button className="nav-btn" title="Entertainment"/>
      </div>
    </div>
  )
}
