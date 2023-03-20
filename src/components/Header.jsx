import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import '../App.css';
import '../styles/header.css';

const Header = () => {
    return (
        <>
            <header className='header-top py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free shipping from 75$</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Call: <a className='text-white' href='tel:+1 234 5678'>+1 234 5678</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper'>
                <div className="container">
                    <div className="row align-items-center py-3">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Shop</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className='input-group'>
                                <input
                                    type='text'
                                    className='form-control py-2'
                                    placeholder='Search here...'
                                    aria-label='Search here...'
                                    aria-describedby='basic-addon2'
                                />
                                <span className='input-group-text p-2' id='basic-addon2'>
                                    <BsSearch className='fs-5'/>
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/compare.svg' alt='Compare' />
                                        <p className='mb-0'>Compare <br/> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/wishlist.svg' alt='Wishlist' />
                                        <p className='mb-0'>Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/user.svg' alt='User' />
                                        <p className='mb-0'>My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center text-white gap-10'>
                                        <img src='images/cart.svg' alt='Cart' />
                                        <div className='d-flex flex-column'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 50</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;