import Button from "@/components/Button";
import Page from "@/components/Page";
import SodaCanScene from "@/components/SodaCanScene";
import { MotionProps } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Component = () => {
    const [ displacement, setDisplacement ] = useState(0);

    return (
        <Page className="justify-content-center align-items-center position-relative">
            <SodaCanScene
                style={{
                    position: 'absolute',
                }}
            />
            <section className="position-absolute d-flex justify-content-center align-items-center flex-column" style={{ paddingTop: `${displacement}px` }}>
                <h1 className="lh-1" style={{ fontSize: '8rem', margin: 0 }}>Get B0NKed up!</h1>
                <Button style={{ padding: '1rem', width: 'min' }} to='/products'>Buy Now</Button>
            </section>
            <Marquee
                autoFill
                style={{
                    color: '#fff',
                    fontFamily: 'Syne',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    position: 'absolute',
                    bottom: '6rem',
                    transform: 'rotate(1.5deg)',
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
            </Marquee>
            <Marquee
                autoFill
                direction="right"
                style={{
                    color: '#fff',
                    fontFamily: 'Syne',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    position: 'absolute',
                    bottom: '4.25rem',
                    transform: 'rotate(1.5deg)',
                }}
            >
                TRY IT NOW!⠀⠀⠀⠀
            </Marquee>
        </Page>
    );
}

export default Component;