import React, { useEffect } from 'react'
import About from '../Components/About'
import Footer from '../Components/Footer'
import Slider from '../Components/Home/Slider'
import HomeCategory from '../Components/HomeCategory'
import UseTitle from '../Components/UseTitle'

export default function Home() {
  UseTitle("Ak electronic")
  return (
    <>
    <Slider/>
    <About/>
    <HomeCategory/>
    </>
  )
}
