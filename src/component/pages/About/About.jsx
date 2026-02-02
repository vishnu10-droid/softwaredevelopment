import React from 'react'
import AboutHero from './AboutHero'
import CompanyOverview from './CompanyOverview'
import MissionVision from './MissionVision'
import CallToAction from './CallToAction'
import Aboutservice from './Aboutservice'

export default function About() {
  return (
    <div>
      <AboutHero/>
      <CompanyOverview/>
      <Aboutservice/>
      <MissionVision/>
       <CallToAction/>
    </div>
  )
}
