import React from 'react'

export default function card(props) {
    return (
        <div class={`card border-${props.color}`}>
            <div class={`card-header ${props.color}`}>
               <img src={props.image} alt="" class="text-image"/>
           </div>
            <div class={`card-body text-${props.color}`}>
                <h3 class="card-title">{props.title}</h3>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
       
    )
}
