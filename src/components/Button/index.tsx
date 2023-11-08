import React from 'react';

import classes from '@lib/classes';

import Styles from './Button.module.scss'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type ButtonProps = {
    children: string | React.ReactNode;
    className?: string;
    form?: string;
    style?: React.CSSProperties;
    type?: "submit" | "button";
    ref?: React.RefObject<HTMLButtonElement>;
    to?: string;
};

const Component: React.FC<ButtonProps> = (props) => {
    const { children, className, form, style, type, to, ...rest } = props;

    const navigate = useNavigate();
    const handleClick = () => to && navigate(to);

    return (
        <motion.button
            className={classes(className, Styles.button)}
            type={type}
            form={form}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </motion.button>
    );
}

export default Component;