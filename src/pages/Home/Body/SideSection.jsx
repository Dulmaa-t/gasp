import React from 'react'

import Input from '../../../components/main/Input'

export default function SideSection() {
    return (
        <div class="side-section" id="3">
            <div class="container">
                <div class="row contact">
                    <div class="card">
                        <div class="text">
                            <h5 class="text-title">
                                Thinking
                            </h5>
                            <h5 class="text-title">
                                differently
                            </h5>
                            <div class="text-about">
                                <p>Вэб сайтын аюулгүй байдал, үр ашиг, хэрэглэгчдийн ажиллагааг хөнгөвчилсөн, оновчтой шийдэлд анхааран, төслийн хугацаа, өртөгийг харилцагчийнхаа шаардлагад нийцүүлэн шийдвэрлэнэ.</p>
                            </div>
                            <span>
                                <a href="#" class="button">Link Button</a>
                            </span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="form">
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
                            {/* <Input /> */}
                            <div class="col-2">
                                <Input />
                            </div>
                            <div class="col-2">
                                <Input />
                            </div>
                            <textarea rows="7" cols="70" placeholder="Enter a message...">
                            </textarea>
                            <span>

                            </span>
                            <input class="input-btn" type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}