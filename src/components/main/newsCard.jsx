import React from 'react'

export default function newsCard(props) {
    return (
        <div class="news-card">
            <a href="#" class="news-card__card-link"></a>
            <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image" />
            <div class="news-card__text-wrapper">
                <h3 class="news-card__title">Amazing First Title</h3>
                <div class="news-card__post-date">Jan 29, 2018</div>
                <div class="news-card__details-wrapper">
                    <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                    <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </div>


    )
}
