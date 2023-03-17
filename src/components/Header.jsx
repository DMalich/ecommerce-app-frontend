import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                    <div className="row">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Shop</Link>
                            </h2>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;