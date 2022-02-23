import React from 'react'

import Button from '../main/Button'

export default function SubMenu() {
  return (
    <div  class="sub-menu">
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="Tech" />
      </div>
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="Science"/>
      </div>
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="History"/>
      </div>
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="Art"/>
      </div>
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="Health"/>
      </div>
      <div class="sub-menu-nav">
        <Button className="nav-btn" title="Entertainment"/>
      </div>
    </div>
  )
}
