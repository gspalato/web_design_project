import classes from '@/lib/classes';

import Styles from './Footer.module.scss';

type FooterProps = {
    style?: React.CSSProperties;
}

const Component: React.FC<FooterProps> = (props) => {
    const { style } = props;

    return (
        <footer className="w-100 d-flex justify-content-center align-items-center" style={{ height: '5rem', ...style }}>
            <p className={classes("mb-0 align-top lh-1 fs-6", Styles.footerText)}>© B0NK! Soft Drinks and Lead Pipes | 1984 - 2023</p>
        </footer>
    );
}

export default Component;