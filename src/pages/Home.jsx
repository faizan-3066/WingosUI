import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Categoris from '../component/Categoris'
import Customer from '../component/Customer'
import Discount from '../component/Discount'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
        <Nav/>
        <Hero/>
        <Categoris/>
        <Customer/>
        <Discount/>
        <Footer/>
    </div>
  )
}
