import Page from "@/components/Page";
import SodaCanScene from "@/components/SodaCanScene";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useBackground } from "@/lib/providers/BackgroundProvider";
import { useSpring } from "@react-spring/three";
import { useCan } from "@/lib/providers/CanProvider";
import { useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const flavors = [
    {
        name: 'Fruit Punch',
        color: "#fc309d",
        background: 'linear-gradient(45deg, #8f060e, #C850C0)',
        description: 'Delicious juice extracted by violently beating fruits up.'
    },
    {
        name: 'Lemon',
        color: '#00ff22',
        /* background: '#00ff00', */
        background: "linear-gradient(45deg, #00ab50 35%, #00d19d 100%)",
        description: 'Intense lemon flavor in every sip!'
    },
    {
        name: 'Blueberry',
        color: '#6600ff',
        background: "linear-gradient(45deg, rgba(49,37,129,1) 35%, rgba(119,37,129,1) 100%)",  
        description: 'Grapes but poggers!'
    },
    {
        name: 'Beans',
        color: '#964b00',
        background: "linear-gradient(45deg, rgba(67,45,39,1) 35%, rgba(140,104,59,1) 100%)",
        description: 'Beans, the new sensation in your mouth! 🤤'
    },
    {
        name: 'Pineapple',
        color: '#e3c230',
        background: "linear-gradient(45deg, #e3c230 50%, rgba(133,232,111,1) 100%)",
        description: "A mix of sweet with a sour touch.\nA real happiness punch.\n(Unless you're allergic.)"
    }
]

const Component = () => {
    const [index, setIndex] = useState(0);

    const { setBackground, resetBackground } = useBackground();

    const swipeProgress = useMotionValue(0);
    const swipeToIndex = useTransform(swipeProgress, [0, 1], [0, flavors.length - 1]);
    const canColor = useTransform(
        swipeToIndex,
        Array.from(Array(flavors.length).keys()),
        Array.from(Array(flavors.length).keys()).map((_, i) => flavors[i].color),
    );
    
    const handleSelect = (k: number) => {
        setIndex(k);
        setBackground(flavors[k].background);
    }

    useEffect(() => {
        setColor(flavors[0].color);
        return resetBackground;
    }, []);

    useMotionValueEvent(swipeProgress, "change", (v) => {
        console.log(v);
    })

    useMotionValueEvent(canColor, "change", (v) => {
        setColor(canColor);
    });

    const { setColor } = useCan();

    return (
        <Page>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={(swiper) => handleSelect(swiper.activeIndex)}
                onSwiper={(swiper) => handleSelect(swiper.activeIndex) }
                onProgress={(swiper) => swipeProgress.set(swiper.progress)}
                pagination={{ clickable: true }}
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
                {
                    flavors.map((flavor, i) => (
                        <SwiperSlide key={i} className="w-100 h-100">
                            <div
                                className="position-absolute d-flex flex-column justify-content-center align-items-left"
                                style={{
                                    left: '5rem',
                                    bottom: '5rem'
                                }}
                            >
                                <h1 style={{ color: '#fff' }}>{flavor.name}</h1>
                                <p style={{ color: '#fff', maxWidth: '40rem' }} className="fs-4">{flavor.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Page>
    );
}

export default Component;