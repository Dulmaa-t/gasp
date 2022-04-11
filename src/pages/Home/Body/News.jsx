import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'utils/axios'

export default function News() {

    const [ lastNews, setNews ] = useState([[],[],[],[]])

    const getLastNews = async () =>
    {
        const { success, data, error } = await axios.get("/api/news/home/").catch(err => err)
        if (success)
        {

            const firstRow = [0, 1]
            const firstRowData = []

            const secondRow = [2, 3]
            const secondRowData = []

            const tirthRow = [4, 5]
            const tirthRowData = []

            const forthRow = [6, 7]
            const forthRowData = []

            for (const idx in data)
            {
                const index = parseInt(idx)
                const item = data[idx]
                if (firstRow.includes(index))
                {
                    firstRowData.push(item)
                }
                if (secondRow.includes(index))
                {
                    secondRowData.push(item)
                }
                if (tirthRow.includes(index))
                {
                    tirthRowData.push(item)
                }
                if (forthRow.includes(index))
                {
                    forthRowData.push(item)
                }
            }

            setNews(
                [
                    firstRowData,
                    secondRowData,
                    tirthRowData,
                    forthRowData,
                ]
            )
        }
    }

    useEffect(
        () =>
        {
            getLastNews()
        },
        []
    )

    return (
        <section className='m-top-content'>
            <div className="c-container">
                <div className="c-row">
                    {
                        lastNews[0].map((news, idx) =>
                        {
                            return (
                                <div className={`col-md-${idx === 0 ? "7" : "5" }`} key={idx}>
                                    <div className="card card-01 height-fix">
                                        <img className="card-img-top" src={process.env.REACT_APP_SERVER_URL + news.image} alt="Card image cap" />
                                        <div className="card-img-overlay">
                                            <h4 className="card-title"><Link to={`/news/${news._id}/`}>{news.title}</Link></h4>
                                            <p className="card-text">{news.text}</p>
                                            <p className="card-text"><Link to={`/news/${news._id}/`}></Link><i className="fa fa-heart-o"></i></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="c-row">
                    {
                        lastNews[1].map((news, idx) =>
                        {
                            return (
                                <div className={`col-md-${idx === 0 ? "5" : "7"}`} key={idx}>
                                    <div className="card card-01 height-fix">
                                        <img className="card-img-top" src={process.env.REACT_APP_SERVER_URL + news.image} alt="Card image cap" />
                                        <div className="card-img-overlay">
                                            <h4 className="card-title"><Link to={`/news/${news._id}/`}>{news.title}</Link></h4>
                                            <p className="card-text">{news.text}</p>
                                            <p className="card-text"><Link to={`/news/${news._id}/`}></Link><i className="fa fa-heart-o"></i></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="c-row">
                    {
                        lastNews[2].map((news, idx) =>
                        {
                            return (
                                <div className={`col-md-${idx === 0 ? "7" : "5"}`} key={idx}>
                                    <div className="card card-01 height-fix">
                                        <img className="card-img-top" src={process.env.REACT_APP_SERVER_URL + news.image} alt="Card image cap" />
                                        <div className="card-img-overlay">
                                            <h4 className="card-title"><Link to={`/news/${news._id}/`}>{news.title}</Link></h4>
                                            <p className="card-text">{news.text}</p>
                                            <p className="card-text"><Link to={`/news/${news._id}/`}></Link><i className="fa fa-heart-o"></i></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
