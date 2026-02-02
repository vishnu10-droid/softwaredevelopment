import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesCard from './ServiceCard'
import TechStack  from './TechStack'
import  CTASection  from './CTASection'



export default function services() {
  return (
    <>
      <ServicesHero />
      <ServicesCard/>
      <TechStack />
      <CTASection/>
      
    </>
  )
}
