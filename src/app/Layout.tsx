import { BrowserRouter } from "react-router-dom"
import { motion } from "framer-motion";

import Footer from "@components/Footer";
import Header from "@components/Header";
import SodaCanScene from "@components/SodaCanScene";

import { useCan } from "@/lib/providers/CanProvider";

import App from "./App";

const Layout: React.FC<React.PropsWithChildren> = () => {
    const { color, visible } = useCan();

    return (
        <BrowserRouter>
            <motion.div
                className="position-absolute h-100 w-100"
                animate={{ opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <SodaCanScene className="h-100 w-100" color={color} />
            </motion.div>
            <div className="pb-0 vh-100 w-100 position-absolute overflow-y-scroll">
                <Header />
                <main className="d-flex justify-content-center align-items-center flex-column h-100 w-100">
                    <App />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default Layout;