import React from 'react'

export default function ImageTitle(props) {
  return (
    <div class="card card-01 height-fix">
        <img class={`card-img-top ${props.imgClassName}`} src="/static/image/2.jpg" alt="Card image cap" />
        <div class="card-img-overlay">
        <h4 class="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
        <p class="card-text">Computer technology requires a completely different methodology </p>
        <p class="card-text"><a href="#" class="fa fa-bookmark-o"></a><a class="fa fa-heart-o" href="#"></a></p>
        </div>
    </div>
  )
}
