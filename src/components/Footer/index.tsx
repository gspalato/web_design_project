import classes from '@/lib/classes';

import Styles from './Footer.module.scss';

const Component = () => {
    return (
        <footer className="w-100 d-flex justify-content-center align-items-center" style={{ height: '5rem' }}>
            <p className={classes("mb-0 align-top lh-1 fs-6", Styles.footerText)}>© Fictitious 1983-2023</p>
        </footer>
    );
}

export default Component;