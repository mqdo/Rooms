import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { Header, Sidebar } from '../components/header';

const withHeader = (WrappedComponent) => {
  return function (props) {
    const [toggleNav, setToggleNav] = useState(false);

    const navRef = useRef();
    const location = useLocation();

    useEffect(() => {
      window.addEventListener('resize', () => setToggleNav(false));
      document.addEventListener('scroll', () => setToggleNav(false));
      return () => {
        window.removeEventListener('resize', () => setToggleNav(false));
        document.removeEventListener('scroll', () => setToggleNav(false));
      }
    }, [])

    useEffect(() => {
      setToggleNav(false);
    }, [location])

    const handleToggle = () => {
      setToggleNav(!toggleNav);
    }

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setToggleNav(false);
      }
    }

    return (
      <div className="relative overflow-x-hidden" onClick={handleClickOutside}>
        <Header handleToggle={handleToggle} />
        {toggleNav
          ? <Sidebar navRef={navRef} handleToggle={handleToggle} />
          : null
        }
        <WrappedComponent {...props} />
      </div>
    );
  }
}

export default withHeader