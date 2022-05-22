import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'




const Layout = ({children}) => {
  return (
    <div className='layout' >
      <Head>
        <title>Qute Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <div>
      <main className='main-container'>
        <div>{children}</div>
      </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout