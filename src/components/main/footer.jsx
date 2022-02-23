import React from 'react'

export default function footer(props) {
    return (
        <div className="footer_menu-col">
            <h3 className="footer-title"><b>{props.title}</b></h3>
            <ul className="footer-nav">
                {
                    props.menus.map(
                        (element, index) =>
                        {
                            return (
                                <li className="footer-nav-item" key={index}>
                                    <a className="footer-nav-link" href="#">
                                        <b>{element.subtitle}:&nbsp;</b>{element.text}
                                    </a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}
