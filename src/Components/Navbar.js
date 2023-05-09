import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Navbar.css'
import { Row, Col} from 'antd';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>

            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        
                        CAREY BEAUTY COLLAGE
                        <i className='fab fa-typo3' /></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-items' : 'fas fa-bars'}></i></div>
                </div>
                <Col>
                <Link to='/'><p style={{color:'white'}}><strong>Home</strong> </p></Link>
                </Col>
                <Col>
                <Link to='/myCourses'><p style={{color:'white'}}><strong>My Courses</strong> </p></Link>
                </Col>
               
                <Col>
                <Link to='/Gallery'><p style={{color:'white'}}><strong>Students Spot-Light</strong></p></Link>
                </Col>
                <Col>
                <Link to='/Products'><p style={{color:'white'}}><strong>Products</strong></p></Link>
                </Col>
                <Col>
                <Link to='/Login'><p style={{color:'white'}}><strong>Login</strong></p></Link>
                </Col>

                {<div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-1 shadow-lg shadow-greyIsh-100">
                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className="bg-transparent text-white-500 focus:outline-none w-[100%]" placeholder="Search  Here....." />
                        
                    </div>
                </div>}
            </nav>

        </>


    )
}

export default Navbar
