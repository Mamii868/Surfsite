import React from 'react'
import './Navbar.css'
import logo from '../images/GarlandLogo.png'

function Navbar() {
    return(
        <div>
            <nav>
                <img src={logo} className='logo'alt="Garland Logo"></img>
                <ul className='links'>
                    <li><a href="https://www.garlandtx.gov/154/Aquatics">Home</a></li>
                    <li><a href="https://www.garlandtx.gov/154/Aquatics">Surf and Swim</a></li>
                    <li><a href="https://www.garlandtx.gov/154/Aquatics">Bradfield Pool</a></li>
                    <li><a href="https://www.garlandtx.gov/154/Aquatics">Holdford Pool</a></li> 
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;