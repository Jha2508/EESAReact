import React from 'react'

import Logo from '../Assets/Logo'
function Navbar() {
    return (
        <nav>
                <div className="logo">
                    <Logo />
                </div>
                <ul className="nav-links">
                    <li>
                        Home
                    </li>
                    <li>
                        Work
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                <div className="burger">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
            </nav>
    )
}

export default Navbar
