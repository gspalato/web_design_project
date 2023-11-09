import Button from "@/components/Button";
import Page from "@/components/Page";
import SodaCanScene from "@/components/SodaCanScene";
import { useBackground } from "@/lib/providers/BackgroundProvider";
import { MotionProps } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Component = () => {
    const { resetBackground } = useBackground();

    useEffect(() => {
        resetBackground();
    }, []);

    return (
        <Page className="justify-content-center align-items-center position-relative overflow-x-hidden">
            <section className="position-absolute d-flex justify-content-center align-items-center flex-column">
                <h1 className="lh-1" style={{ fontSize: '8rem', margin: 0 }}>Get B0NKed up!</h1>
                <Button style={{ padding: '1rem', width: 'min', color: "#000"}} to='/products'>Buy Now</Button>
            </section>
            <div
                className="position-absolute w-100 d-flex justify-content-center align-items-center flex-column"
                style={{ background: '#000000aa', bottom: '4rem', transform: 'rotate(1.5deg)', }}
            >
                <Marquee
                    autoFill
                    style={{
                        color: '#fff',
                        fontFamily: 'Syne',
                        fontSize: '1.5rem',
                        fontWeight: 900,
                    }}
                >
                    NO WATER⠀⠀⠀
                    FULL OF SUGAR⠀⠀⠀
                    VITAMIN FREE⠀⠀⠀
                    100% SYNTHETIC⠀⠀⠀
                    RADIOACTIVE⠀⠀⠀
                    ALLERGENIC⠀⠀⠀
                    LIGMA⠀⠀⠀
                    GROUP⠀1⠀CARCINOGENIC⠀⠀⠀
                    GLOWS IN THE DARK⠀⠀⠀
                    NEW LEAD PACKAGING!⠀⠀⠀
                    MICROPLASTIC INFUSED⠀⠀⠀
                    AirPods™ NOT INCLUDED⠀⠀⠀
                    LIFE-CHANGING⠀⠀⠀
                    ENDORSED BY PETA⠀⠀⠀
                </Marquee>
                <Marquee
                    autoFill
                    direction="right"
                    style={{
                        color: '#fff',
                        fontFamily: 'Syne',
                        fontSize: '1.5rem',
                        fontWeight: 900,
                    }}
                >
                    TRY IT NOW!⠀⠀⠀⠀
                    BUY IT NOW!⠀⠀⠀
                    GET IT NOW!⠀⠀⠀
                    NOW!⠀⠀⠀
                </Marquee>
            </div>
        </Page>
    );
}

export default Component;