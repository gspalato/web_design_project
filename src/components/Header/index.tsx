import { Link } from 'react-router-dom';

import classes from '@/lib/classes';
import Styles from './Header.module.scss';
import { useEffect, useState } from 'react';

const Component = () => {
    const navlink = classes("nav-link", Styles.navlink);

    return (
        <header
            className="w-100 d-flex justify-content-between align-items-center fixed-top p-4"
            style={{
                backdropFilter: 'blur(5px)',
                transition: 'background 0.25s ease-in-out'
            }}
        >
            <h3 className="fst-italic">B0NK!</h3>
            <nav className="navbar">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className={navlink} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navlink} to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navlink} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={navlink} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Component;