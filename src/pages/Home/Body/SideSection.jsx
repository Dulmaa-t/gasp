import React from 'react'

import LinkButton from '../../../components/main/LinkButton'
import Input from '../../../components/main/Input'

export default function SideSection() {

    return (
        <div className="side-section" id="3">
            <div className='c-container-fluid'>
                <div className="c-row home-body-title">
                    <div className="card" style={{ marginBottom: "1em" }}>
                        <div className="text">
                            <h5 className="text-title" style={{ marginTop: "4em" }}>
                                Thinking
                            </h5>
                            <h5 className="text-title">
                                differently
                            </h5>
                            <div className="text-about">
                                <p>Вэб сайтын аюулгүй байдал, үр ашиг, хэрэглэгчдийн ажиллагааг хөнгөвчилсөн, оновчтой шийдэлд анхааран, төслийн хугацаа, өртөгийг харилцагчийнхаа шаардлагад нийцүүлэн шийдвэрлэнэ.</p>
                            </div>
                            <LinkButton title="Link Button" />
                        </div>
                    </div>
                    <div className="card" style={{ width: "auto" }}>
                        <div className="form">
                            <div style={{ display: "flex" }}>
                                <div>
                                    <div className="col-2">
                                        <Input />
                                    </div>
                                </div>
                                <div>
                                    <div className="col-2">
                                        <Input />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <Input />
                            </div>
                            <div className="col-2">
                                <Input />
                            </div>
                            <textarea rows="7" cols="70" placeholder="Enter a message...">
                            </textarea>
                            <span>

                            </span>
                            <input className="input-btn" type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
