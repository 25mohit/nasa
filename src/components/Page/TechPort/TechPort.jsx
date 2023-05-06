import React, { useEffect, useState } from 'react'
import Hero from '../../Common/Hero/Hero'
import LayoutMain from '../../Common/Layout/LayoutMain'

const TechPort = () => {
  const title = "Techport"

  return (
    <LayoutMain>
        <Hero title={title} link='/techport-view'>
            <p>Welcome to TechPort - NASA's resource for collecting and sharing information about NASA-funded technology development. Techport allows the public to discover the technologies NASA is working on every day to explore space, understand the universe, and improve aeronautics. NASA is developing technologies in areas such as propulsion, nanotechnology, robotics, and human health.</p>
            <p>TechPort showcases NASA’s portfolio of active and completed technology projects. Our team gathers technology investment information from across the Agency in order to facilitate opportunities for collaboration and partnerships, analyses of how the Agency is meeting mission needs, and data visualizations of technology drivers that enable key decisions.</p>
            <p>We believe that NASA’s mission is served best when information flows freely. That’s why we designed a system that highlights the exciting, novel and crosscutting activities taking place at NASA. Whether it’s a concept in its early stage, a prototype, or a fully developed technology - it’s all here in TechPort. We invite you to come look around!<a className='visit-link' href='https://techport.nasa.gov/about' target='_blank'>visit Source</a></p>
        </Hero>
    </LayoutMain>
  )
}

export default TechPort