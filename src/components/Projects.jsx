import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
    

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div id="projects" className="projects">
            <div data-aos="fade-up" className="projects-title">Projects</div>
         
        </div>
    )
}