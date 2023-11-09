import { Link, useLocation, useNavigation } from 'react-router-dom';

import classes from '@/lib/classes';
import Styles from './Header.module.scss';
import { useEffect, useState } from 'react';

const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

const Component = () => {
    const location = useLocation();

    const navlink = classes("link-underline-opacity-0 text-decoration-none", Styles.navlink);

    return (
        <header
            className="d-flex justify-content-between align-items-center fixed-top px-5 pt-4"
            style={{
                backdropFilter: 'blur(5px)',
                transition: 'background 0.25s ease-in-out'
            }}
        >
            <h3 className="fst-italic m-0" style={{ color: '#000' }}>B0NK!</h3>
            <nav className="navbar navbar-expand-md">
                <ul className="nav d-flex gap-4">
                    {
                        routes.map((route, i) => (
                            <li className="nav-item" key={i}>
                                <Link
                                    className={navlink}
                                    aria-current="page"
                                    to={route.path}
                                    style={{
                                        color: location?.pathname == route.path ? '#fff' : '#000',
                                        transition: 'color 0.1s ease-in-out'
                                    }}
                                >{route.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Component;