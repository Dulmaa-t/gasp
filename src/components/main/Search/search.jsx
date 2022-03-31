import React, { useEffect, useState } from 'react'

import css from './style.module.css'

export default function Search()
{
  const [ show, setShow ] = useState(false)

  useEffect(
    () =>
    {
      const $ = window.$
      // Clear the text box when it receives focus
      $("#search").focusin(function(e) {
        if($(this).val() != "") {
          $(this).val("");
        }
      })
    },
    []
  )

  const handleClick = () =>
  {
    setShow(!show)
  }

  return (
    <div className={css.box}>
      <div className={css['container-2']}><span className={css.icon}><i className="fa fa-search"></i></span>
        <input type="search" id="search" className={css.search} placeholder="Search..." data-prefixbox="true" />
      </div>
    </div>
  )
}
