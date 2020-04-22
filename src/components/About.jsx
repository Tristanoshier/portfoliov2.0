import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

    return (
        <div className="about">
            <div data-aos="fade-up" className="about-title">About</div>
            <div className="about-content">
                <p data-aos="fade-up" className="about-text">
                    I'm currently a full-stack JavaScript developer seeking a position in Web Development/Software Development that will challenge me and further my coding skills. I enjoy problem-solving, creative thinking, and am very adaptable to any team environment. Throughout past educational and work experiences, I have met strict project deadlines, developed unique floor plans, and have worked in many different team environments. All of these experiences have prepared me for a multitude of situations I will face on the job in the tech world.
                </p>
                <div data-aos="fade-up" className="about-picture">
                    <img className="picture-of-me" src={require("../assets/picofme.png")} alt="picture of tristan" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
