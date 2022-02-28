import React from 'react'

import LinkButton from '../../../components/main/LinkButton'
import Input from '../../../components/main/Input'

export default function SideSection() {

    return (
        <section>
            <div class="grid-flex">
                <div class="col col-form">
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
                <div class="col col-text col-left">
                    <div class="Aligner-item">
                        <h5 class="text-title">
                            Thinking <br /> differently
                        </h5>
                        <div class="text-about">
                            <p>Вэб сайтын аюулгүй байдал, үр ашиг, хэрэглэгчдийн ажиллагааг хөнгөвчилсөн, оновчтой шийдэлд анхааран, төслийн хугацаа, өртөгийг харилцагчийнхаа шаардлагад нийцүүлэн шийдвэрлэнэ.</p>
                        </div>
                        <span>
                            <a href="#" class="button">Link Button</a>
                        </span>
                    </div>
                </div>
            </div>
      </section >
      
    )
}
