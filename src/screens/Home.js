import React from 'react'
import FeaturedCourse from '../components/FeaturedCourse'
import Form from '../components/Form'
import Logos from '../components/logos'
import Mainfeatures from '../components/Mainfeatures'
import Mentors from '../components/Mentors'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Work from '../components/Work'

const Home = () => {
    return (
        <div>
          
          <Navbar/> 
          <Mainfeatures/>
          <Work/>
          <Form/>
          <Mentors/>
          <FeaturedCourse/>
          <Testimonials/>
          <Logos/>
        </div>
    )
}

export default Home
