import React from 'react';


const Sitebar = () => {

    const reload = () => {
        window.location.reload()
    }
    return (
        <div className= "menu-wrap">
            <input type="checkbox" className="toggler" />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li onClick={() => reload()}><a href="#">Home</a></li>
                                <li onClick={() => reload()}><a href="#about">About</a></li>
                                <li onClick={() => reload()}><a href="#skills">Skills</a></li>
                                <li onClick={() => reload()}><a href="#projects">Projects</a></li>
                                <li onClick={() => reload()}><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Sitebar;
