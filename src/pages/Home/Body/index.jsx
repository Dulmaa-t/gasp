import React from 'react'

import News from './News'
import SideSection from './SideSection'
import Cards from './Cards'

import LinkButton from '../../../components/main/LinkButton'

export default function index() {

  return (
    <div>
      <section className='side-section'>
        <div className="grid-flex">
          <div className="col col-image">
            &nbsp;
          </div>
          <div className="col col-text col-left">
            <div className="Aligner-item">
              <h5 className="text-title">
                Thinking <br /> differently
            </h5>
              <div className="text-about">
                <p>Вэб сайтын аюулгүй байдал, үр ашиг, хэрэглэгчдийн ажиллагааг хөнгөвчилсөн, оновчтой шийдэлд анхааран, төслийн хугацаа, өртөгийг харилцагчийнхаа шаардлагад нийцүүлэн шийдвэрлэнэ.</p>
            </div>
            <span>
                <a href="#" className="button">Link Button</a>
            </span>
            </div>
          </div>
        </div>
      </section>

      <main>
        <Cards />
        <News />
        <SideSection />
      </main>
    </div>

  )
}
