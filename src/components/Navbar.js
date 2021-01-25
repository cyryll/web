import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobilemenu = () => setClick(click)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/"
                        className="navbar-logo">
                        CPO
                        <i className="fa fa-ravelry" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu-active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links"
                                onClick={closeMobilemenu}>
                                Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links"
                                onClick={closeMobilemenu}>
                                About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links"
                                onClick={closeMobilemenu}>
                                Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links-mobile"
                                onClick={closeMobilemenu}>
                                Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
