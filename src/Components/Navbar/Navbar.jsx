import React, { useEffect, useRef, useState } from 'react'
import styles from "./Navbar.module.css"
import { FaBed, FaMagnifyingGlass, FaPerson } from "react-icons/fa6";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  const navbarRef = useRef(null);

  const toggleAuth = () => {
    setAuth(!auth)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAuth(false)
};

const handleClickOutside = (event) => {

    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setAuth(false)
    }
};

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 888) { 
            setIsOpen(true);
            if (document.removeEventListener) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        } else {
            setIsOpen(false);
            if (document.addEventListener) {
                document.addEventListener('mousedown', handleClickOutside);
            }
        }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        if (document.removeEventListener) {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    };
}, []);


  return (
    <section className={styles.doubleNav}>
      <section></section>
      <section ref={navbarRef} className={styles.navbar}>
        <div className={styles.navContainer}>
        <span className={styles.logo}>
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/logo.png" alt="GoWilds" />
        </span>

        <div className={styles.nav}>
        <div className={styles.hamburger}>
              {isOpen ? (
                  <div style={{fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <AiFillCloseSquare className={styles.menu} onClick={toggleMenu} /></div>
              ) : (
                  <div style={{fontSize: "30px"}}><BsFillMenuButtonWideFill className={styles.menu} onClick={toggleMenu} /></div>
              )}
          </div>
        {isOpen && <div className={styles.navLinks}>
          <div className={styles.links}>
            <NavLink className={styles.link} to="/">Home</NavLink>
            <NavLink className={styles.link} to="/tours">Tours Page</NavLink>
            <NavLink className={styles.link} to="/destination">Destination</NavLink>
            <NavLink className={styles.link} to="/page">Pages</NavLink>
            <NavLink className={styles.link} to="/news">News</NavLink>
            <NavLink className={styles.link} to="/contact">Contact</NavLink>
          </div>
        </div>}

          <div className={styles.searchPerson}>
            <span className={styles.icons}>
              <FaMagnifyingGlass />
            </span>
            <div onClick={toggleAuth} className={styles.authentication}>
              <span className={styles.icons}>
                <CgProfile />
              </span>

              {auth ? <div className={styles.authBtn}>
                <NavLink className={styles.signAuthBtn} to="/signup2">Sign Up</NavLink>
                <NavLink className={styles.signAuthBtn} to="/signin">Sign In</NavLink>
              </div> : null}
            </div>
          </div>
        </div>

        {/* <div className={styles.navContainer}>
            
            <div className={styles.navItems}>
                <FaBed />
                <button className={styles.navButton}>Register</button>
                <button className={styles.navButton}>Login</button>
            </div>
        </div> */}
        </div>
    </section>
    </section>
  )
}

export default Navbar