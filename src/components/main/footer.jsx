import React from 'react'

export default function footer(props) {
    return (
        <div class="footer_menu-col">
            <h3 class="footer-title"><b>{props.title}</b></h3>
            <ul class="footer-nav">
                {
                    props.menus.map(
                        (element, index) =>
                        {
                            return (
                                <li class="footer-nav-item">
                                    <a class="footer-nav-link" href="#">
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
