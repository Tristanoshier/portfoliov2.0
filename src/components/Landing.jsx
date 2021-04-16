import React from 'react'
import  { Spring }  from 'react-spring/renderprops'


export default function Landing() {
    return (
        <div className='landing-bg'>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 1000, duration: 1000}}
            >
                {props => (
                    <div style={props}>
                        <div className="name-header">Tristan Oshier</div>
                    </div>
                )}
            </Spring>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 1500, duration: 1000}}
            >
                {props => (
                    <div style={props}>
                        <div className="occupation-header">Software Engineer</div> 
                    </div>
                )}
            </Spring>
        </div>       
    )
}
