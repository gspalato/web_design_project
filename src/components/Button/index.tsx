import React from 'react';

import classes from '@lib/classes';

import Styles from './Button.module.scss'
import { motion } from 'framer-motion';
import { Link, useHref, useLocation, useNavigate, useNavigation } from 'react-router-dom';

type ButtonProps = {
    children: string | React.ReactNode;
    className?: string;
    form?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: "submit" | "button";
    ref?: React.RefObject<HTMLButtonElement>;
    to?: string;
};

const Component: React.FC<ButtonProps> = (props) => {
    const { children, className, form, onClick, style, type, to, ...rest } = props;

    const MotionLink = motion(Link);

    const classNames = classes(className, Styles.button);

    if (to)
        return (
            <MotionLink
                className={classNames}
                to={to}
                style={{ color: '#000', ...style }}
                onClick={onClick}
                whileTap={{ transform: 'translate(5px, 5px)', boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)' }}
                transition={{ duration: 0.1 }}
                {...rest}
            >
                {children}
            </MotionLink>
        );
    else
        return (
            <motion.button
                className={classNames}
                type={type}
                form={form}
                onClick={onClick}
                style={style}
                whileTap={{ transform: 'translate(5px, 5px)', boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 1)' }}
                transition={{ duration: 0.1 }}
                {...rest}
            >
                {children}
            </motion.button>
        );
}

export default Component;