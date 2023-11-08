import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '@app/Home';
import About from '@app/About';
import Contact from '@app/Contact';
import Products from '@app/Products';

import * as bootstrap from 'bootstrap';

import '@styles/global.scss';

const App: React.FC<React.PropsWithChildren> = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;