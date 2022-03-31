import React from 'react'

import ConfigText from './ConfigText'
import ConfigTextArea from './ConfigTextArea'

export default function Configs() {
    return (
        <>
            <h1 className={`page-title`}>Тохиргоо</h1>
            <div className={`page-content`}>
                <h3>Холбоосууд</h3>
                <hr />
                <ConfigText configName={"FACEBOOK"} title="FACEBOOK"/>
                <ConfigText configName={"INSTAGRAMM"} title="INSTAGRAM"/>
                <ConfigText configName={"YOUTUBE"} title="YOUTUBE"/>
                <h3>Нүүр хуудас</h3>
                <hr />
                <ConfigTextArea configName={"HOME_ABOUT"} title="Ерөнхий танилцуулага"/>
                <ConfigText configName={"HOME_TITLE"} title="Ерөнхий танилцуулагын гарчиг"/>
                <ConfigTextArea configName={"HOME_GOAL"} title="Сайтын уриа"/>
                <h3>Footer</h3>
                <hr />
                <ConfigTextArea configName={"FOOTER_ADDRESS"} title="Хаяг"/>
                <ConfigText configName={"FOOTER_EMAIL"} title="Мэйл"/>
                <ConfigText configName={"FOOTER_SITE"} title="Сайт"/>
                <ConfigText configName={"FOOTER_PHONE"} title="Утас"/>
                <ConfigText configName={"FOOTER_PHONE_NUMBER"} title="Гар утас"/>
            </div>
        </>
    )
}
