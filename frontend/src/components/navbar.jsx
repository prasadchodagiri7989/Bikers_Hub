import React from 'react';
import '../styles/global.css';
import "bootstrap/dist/css/bootstrap.min.css";
import bh_logo from '../assets/footer-logo.png';
import { Link } from 'react-router-dom';
import Areadrpdwn from './areadropdwn';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
    <>
    <div className='headerWrapper border-b border-gray-500'>
            <div className='top-strip top-strip_bg'>
                <p className='text-center mb-0 mt-0'>Free Delivery Across India on Purchases Over ₹5000/-</p>
            </div>

    <header className='header d-flex'>
        <div className="container d-flex">
            <div className="d-flex flex-row align-items-center">
                <div className="logoWrapper d-flex col-sm-1">
                    <Link to={'/'}><img src={bh_logo} alt="logo"/></Link> 
                    </div>
                    <div className="col-sm-10 d-flex align-items-center part2">
                        <Areadrpdwn />
                        {/* Head search option starts here */}

                            <div className="headSearch ml-3 mr-3">
                                <input type="text" placeholder='Search for products...'/>
                                <Button className='circle'><IoSearch/></Button>

                            </div>

                        {/* Head search option ends here */}

                        {/* signin / addtocart / cart amount section starts here */}
                        <div className='part3 d-flex align-items-center '>
                            <Button className='usercircle'> <FaRegUser/></Button>
                            <div className='ml-auto cartTab d-flex'>
                                    <span className='price'>3500/-</span>
                                    <Button className='cartcircle'><FaShoppingCart/></Button>
                                </div>
                        </div>

                        {/* signin / addtocart / cart amount section ends here */}


                    </div>
            </div>
        </div>
    </header>

    <nav className='container d-flex'>
        <div className="row">
            <div className='col-sm-3 navpart1'>

            </div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Header;