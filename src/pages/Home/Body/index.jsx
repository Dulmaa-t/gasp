import React from 'react'

import News from './News'
import SideSection from './SideSection'
import Cards from './Cards'

import LinkButton from '../../../components/main/LinkButton'

export default function index() {

  return (
    <div>
      <section className='side-section'>
        <div class="grid-flex">
          <div class="col col-image">
            &nbsp;
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
      </section>

      <main>
        <Cards />
        <News />
        <SideSection />
      </main>
    </div>

  )
}
