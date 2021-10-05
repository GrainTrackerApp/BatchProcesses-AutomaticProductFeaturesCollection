import React, { useState, useEffect } from 'react';
import { Button } from './Button';


import { Link } from 'react-router-dom';
import './Navbar.css';
import App from '../App';
import app from "../Firebase/firebase-config";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  if (App.currentUserName !== undefined) {
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/Menu' className='navbar-logo' onClick={closeMobileMenu}>
              MENU
              <i class='fab fa-typo3' />
            </Link>
            <div className="bik">
               <a href="/menu">
                  <img src="http://www.kipro-projekt.de/dateien/bik_logo.svg" width="auto" height = "60" alt="BIK">
                  </img>
                 </a>  
               </div>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/add' className='nav-links' onClick={closeMobileMenu}>  
                  Add
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/add-Evaluation'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Detection 
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projekt' 
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Project
                </Link>
              </li>
           
              <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            </ul>
            {
            <Link to="/login" className="btn btn-primary" 
            //onClick={closeMobileMenu}
            // Menu 2 mit '/' link
            >Sign out</Link>

         
           }
          </div>
        </nav>
      </>
    )
  } else {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Menu' className='navbar-logo' onClick={closeMobileMenu}>
            MENU
            <i class='fab fa-typo3' />
          </Link>
          <div className="bik">
               <a href="/menu">
                  <img src="http://www.kipro-projekt.de/dateien/bik_logo.svg" width="auto" height = "60" alt="BIK">
                  </img>
                 </a>  
               </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projekt'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Project
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
  }
}

export default Navbar;