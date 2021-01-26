import { useState,useEffect } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    //show signup button only once
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/"
                        className="navbar-logo" onClick={closeMobileMenu}>
                        CPO
                        <i className="fa fa-ravelry" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links"
                                onClick={closeMobileMenu}>
                                Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links"
                                onClick={closeMobileMenu}>
                                About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links"
                                onClick={closeMobileMenu}>
                                Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile"
                                onClick={closeMobileMenu}>
                                Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = "btn--outline">Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
