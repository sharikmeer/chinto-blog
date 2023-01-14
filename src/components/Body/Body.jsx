import React from 'react'
import Posts from '../Posts'
import Projects from '../Projects'

const Body = () => {
  return (
    <section className='body-content max-w-5xl mx-auto'>
      <Posts/>
      <Projects/>
    </section>
  )
}

export default Body