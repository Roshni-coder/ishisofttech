import React from 'react'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Clientel from '../components/Clientel'
import ExploreInDustry from '../components/ExploreInDustry'

function Home() {
  return (
    <section className='container-fuid'>
     <Slider/>
     <Services/>
     
      <ExploreInDustry/>
      <Clientel/>
    </section>
  )
}

export default Home
