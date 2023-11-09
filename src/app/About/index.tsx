import Button from "@/components/Button";
import Page from "@/components/Page";
import { useCan } from "@/lib/providers/CanProvider";
import { useEffect } from "react";

const Component = () => {
    const { setVisible } = useCan();

    useEffect(() => {
        setVisible(false);

        return () => setVisible(true);
    }, []);

    return (
        <Page className="d-flex align-items-center justify-content-center flex-column">
            <div className="text-column w-75">
                <h1 style={{ color: '#000' }}>About us</h1>
                <p>
                    We are a conceptual and very trustworthy soft drink brand created by the group of friends and students who name themselves "MISFITS".
                </p>
                <p>
                    The page you're looking at is a React single page application, using Vite as a build tool and Bootstrap as a CSS framework.
                    B0NK! uses Framer Motion for animations and Three.js for 3D rendering.
                </p>
                <p>
                    What? You don't know what React is? Silly you! React is a JS framework that allows you to create UIs by reusing components,
                    while introducing tools to mantain and update state. 
                </p>
            </div>
        </Page>
    );
}

export default Component;