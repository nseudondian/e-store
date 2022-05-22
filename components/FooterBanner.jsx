import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ( {footerBanner : { discount, largeText1, largeText2,smallText, midText, desc,  saleTime, buttonText, product, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p className='discount'>{discount}</p>
          {/* <h3>{largeText1}</h3>
          <h3>{largeText2}</h3> */}
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type='button' className='footer-btn'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner