import React from 'react'
import Landing from '../components/Landing/Landing'
import FiltersTab from '../components/FiltersTab'
import ProjectList from '../components/ProjectList'

const HomePage = () => {
  return (
    <div className='HomePage' >
      <Landing/>
      <FiltersTab/>
      <ProjectList/>
    </div>
  )
}

export default HomePage
