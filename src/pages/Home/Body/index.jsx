import React from 'react'

import News from './News'
import SideSection from './SideSection'
import Cards from './Cards'

import LinkButton from '../../../components/main/LinkButton'

export default function index() {

  return (
    <div>
      <div className="side-section" id="3">
        <div className='c-container-fluid'>
          <div className="c-row home-body-title">
            <div className="card" style={{ marginBottom: "1em", display: "flex", alignItems: "center" }}>
                <div className="text">
                  <h5 className="text-title">
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
            <img className='position-relative home-body-img' src="/static/image/5.jpg" alt="img" />
          </div>
        </div>
      </div>
      <main>
        <Cards />
        <News />
        <SideSection />
      </main>
    </div>

  )
}
