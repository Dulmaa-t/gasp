import React from 'react'
import { Link } from 'react-router-dom'

import LinkButton from '../../../components/main/LinkButton'
import Input from '../../../components/main/Input'

export default function SideSection() {

    return (
        <section>
            <div class="flexbox">
                <div class="leftside">
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
                                <Link to={'/news/'} class="button">Link Button</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="rightside">
                    <div class="form_wrapper">
                        <div class="form_container">
                            <form>
                                <div class="row clearfix">
                                    <div class="col_half">
                                        <div class="input_field">
                                            <Input />
                                        </div>
                                    </div>
                                    <div class="col_half">
                                        <div class="input_field">
                                            <Input />
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col_half">
                                        <div class="input_field">
                                            <Input />
                                        </div>
                                    </div>
                                    <div class="col_half">
                                        <div class="input_field">
                                            <Input />
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div>
                                        <div class="textarea_field">
                                            <textarea cols="46" rows="3" name="comments"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <input class="button" type="submit" value="Sumbit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
