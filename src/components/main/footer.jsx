import React from 'react'

export default function footer(props) {
    return (


        <ul class="footer__nav">
            <li class="nav__item nav__item--extra">
                <h2 class="nav__title">{props.title}</h2>

                <ul class="nav__ul">
                    {
                        props.menus.map(
                            (element, index) => {
                                return (
                                    <li>
                                        <a href="#" class="nav__link">
                                            <b>{element.subtitle}:&nbsp;</b>{element.text}
                                        </a>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </li>
        </ul>
    )
}
