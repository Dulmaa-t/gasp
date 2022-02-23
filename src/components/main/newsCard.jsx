import React from 'react'

export default function newsCard(props) {
    return (
        <div className="news-card">
            <a href="#" className="news-card__card-link"></a>
            <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
                <h3 className="news-card__title">Amazing First Title</h3>
                <div className="news-card__post-date">Jan 29, 2018</div>
                <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
                    <a href="#" className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        </div>


    )
}
