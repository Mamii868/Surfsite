import React from 'react'
import './Navbar.css'

function Navbar() {
    return(
        <div>
            <nav>
                <div className='logo'>Garland</div>
                <ul className='links'>
                    <li><a>Home</a></li>
                    <li><a>Surf and Swim</a></li>
                    <li><a>Bradfield Pool</a></li>
                    <li><a>Holdford Pool</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;