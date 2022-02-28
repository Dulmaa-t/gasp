import React from 'react'

import ImageTitle from '../../../components/main/ImageTitle'

export default function News() {

    const lastNews =
    [
        {
            image: "/static/image/2.jpg",
            title: "",
            text: "",
        }
    ]

    return (
        <section className='m-top-content'>
            <div className="c-container">
                <div className="c-row">
                    <div className="col-md-4">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top" src="/static/image/2.jpg" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Computer technology requires a completely different methodology </p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><i className="fa fa-heart-o" href="#"></i></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top" src="/static/image/lead_800x450.jpeg" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Captain Jack Sparrow searches for the trident of Poseidon.</p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-row">
                    <div className="col-md-8">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top" src="/static/image/neon-coming-soon-background_52683-58476.webp" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Computer technology requires a completely different methodology </p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top" src="/static/image/neon-coming-soon-background_52683-58476.webp" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Computer technology requires a completely different methodology </p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-row">
                    <div className="col-md-4">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top long-img" src="/static/image/13.jpg" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Computer technology requires a completely different methodology </p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card card-01 height-fix">
                            <img className="card-img-top" src="/static/image/6.jpg" alt="Card image cap" />
                            <div className="card-img-overlay">
                                <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                <p className="card-text">Captain Jack Sparrow searches for the trident of Poseidon.</p>
                                <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                            </div>
                        </div>
                        <div className="c-row">
                            <div className="col-md-8">
                                <div className="card card-01 height-fix">
                                    <img className="card-img-top" src="/static/image/11.jpg" alt="Card image cap" />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                        <p className="card-text">Computer technology requires a completely different methodology </p>
                                        <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-01 height-fix">
                                    <img className="card-img-top" src="/static/image/14.jpg" alt="Card image cap" />
                                    <div className="card-img-overlay">
                                        <h4 className="card-title"><a href="#">What is Computer Technology | IGI Global</a></h4>
                                        <p className="card-text">Captain Jack Sparrow searches for the trident of Poseidon.</p>
                                        <p className="card-text"><a href="#" className="fa fa-bookmark-o"></a><a className="fa fa-heart-o" href="#"></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
