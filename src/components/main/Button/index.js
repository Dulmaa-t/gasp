import React from 'react'

export default function Button(props) {
  return (
      <button
        role={"button"}
        className={`main ${props.btn} ${props.className}`}
        style = {props.style}
        onClick={props.onClick}
          // {
          //   display:"flex",
          //   margin:"0 auto"
          // }
        >
        {props.title}
      </button>
  )
}
