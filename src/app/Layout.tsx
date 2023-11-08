import { BrowserRouter } from "react-router-dom"
import App from "./App";

import Header from "@/components/Header";
import Footer from "@components/Footer"

const Layout: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <BrowserRouter>
            <div className="pb-0 vh-100 w-100">
                <Header />
                <main className="d-flex justify-content-center align-items-center h-100 w-100">
                    <App />
                </main>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Layout;