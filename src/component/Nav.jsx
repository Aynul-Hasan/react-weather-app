import React,{useState} from 'react'
import { FaBars ,FaTimes , FaFan } from 'react-icons/fa';
import { Link } from "react-router-dom";
import '../component/css/nav.css'



export const Nav=()=> {

    
    const [click, setclick] = useState(false);


    const handleClick=()=> setclick(!click)
    const closeMobileMenu=()=> setclick(false)


    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  <FaFan className="logo-icon"/> Weather  <FaFan className="logo-icon"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                   {click? <FaTimes className='fa-times'/> :<FaBars className="fa-bars"/>}
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                       <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link> 
                    </li>
                    <li className="nav-item">
                       <Link to='/weather' className="nav-links" onClick={closeMobileMenu} >Weather</Link> 
                    </li>
                    <li className="nav-item">
                       <Link to='/about' className="nav-links" onClick={closeMobileMenu} >AboutUS</Link> 
                    </li> 
                </ul>
               
            </div>

        </nav>
            
        </>
    )
}
