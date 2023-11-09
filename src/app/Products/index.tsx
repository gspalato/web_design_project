import Page from "@/components/Page";
import SodaCanScene from "@/components/SodaCanScene";
import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'
import 'swiper/css';
import { useBackground } from "@/lib/providers/BackgroundProvider";
import { useSpring } from "@react-spring/three";
import { useCan } from "@/lib/providers/CanProvider";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import Button from "@/components/Button";
import { RICK_ROLL } from "@/constants";
import { Carousel } from "bootstrap";
import CarouselButton from "./CarouselButton";

const flavors = [
    {
        name: 'Fruit Punch',
        color: "#fc309d",
        background: 'linear-gradient(45deg, #8f060e, #C850C0)',
        description: 'Delicious juice extracted by violently beating fruits up.',
        ingredients: 'Fruits, brass knuckles, sugar and isopropanol.'
    },
    {
        name: 'Lemon',
        color: '#00ff22',
        /* background: '#00ff00', */
        background: "linear-gradient(45deg, #00ab50, #00d19d)",
        description: 'Intense lemon flavor in every sip!',
        ingredients: '2 lemons, enriched uranium and a hint of ligma (synthetic).'
    },
    {
        name: 'Blueberry',
        color: '#6600ff',
        background: "linear-gradient(45deg, rgba(49,37,129,1), rgba(119,37,129,1))",  
        description: 'Grapes but poggers!',
        ingredients: 'Cesium-137, methylene blue, and a berry we found on a bush.'
    },
    {
        name: 'Beans',
        color: '#964b00',
        background: "linear-gradient(45deg, rgba(67,45,39,1), rgba(140,104,59,1))",
        description: 'Beans, the new sensation in your mouth! 🤤',
        ingredients: 'Beans'
    },
    {
        name: 'Pineapple',
        color: '#e3c230',
        background: "linear-gradient(45deg, #e3c230, rgba(133,232,111,1))",
        description: "A mix of sweet with a sour touch.\nA real happiness punch.\n(Unless you're allergic.)",
        ingredients: 'Spongebob & Friends, 7 moles of sulphuric acid.'
    }
]

const Component = () => {
    const { setBackground, resetBackground } = useBackground();

    const swipeProgress = useMotionValue(0);
    const swipeToIndex = useTransform(swipeProgress, [0, 1], [0, flavors.length - 1]);
    const canColor = useTransform(
        swipeToIndex,
        Array.from(Array(flavors.length).keys()),
        Array.from(Array(flavors.length).keys()).map((_, i) => flavors[i].color),
    );
    
    const handleSelect = (k: number) => {
        setBackground(flavors[k].background);
    }

    useEffect(() => {
        setColor(flavors[0].color);
        return resetBackground;
    }, []);

    useMotionValueEvent(canColor, "change", (v) => {
        setColor(canColor);
    });

    const { setColor } = useCan();

    return (
        <Page>
            <Swiper
                modules={[ Mousewheel ]}
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={(swiper) => handleSelect(swiper.activeIndex)}
                onSwiper={(swiper) => handleSelect(swiper.activeIndex) }
                onProgress={(swiper) => swipeProgress.set(swiper.progress)}
                pagination={{ clickable: true }}
                className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                style={{ cursor: 'grab' }}
            >
                {
                    flavors.map((flavor, i) => (
                        <SwiperSlide key={i} className="w-100 h-100">
                            <div
                                className="position-absolute d-flex gap-0 flex-row justify-content-between align-items-center w-full"
                                style={{
                                    left: '5rem',
                                    right: '5rem',
                                    bottom: '5rem'
                                }}
                            >
                                <div className="d-flex gap-0 flex-column align-items-left justify-content-center">
                                    <h1 style={{ color: '#fff', lineHeight: 1 }}>{flavor.name}</h1>
                                    <p style={{ color: '#fff', maxWidth: '40rem' }} className="fs-4">{flavor.description}</p>
                                    <p style={{ color: '#fff', maxWidth: '40rem', margin: 0 }} className="fs-6">Ingredients: {flavor.ingredients}</p>
                                </div>
                                <Button
                                    style={{ background: flavor.color, fontSize: '3rem' }}
                                    to={RICK_ROLL}
                                >
                                    Buy
                                </Button>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Page>
    );
}

export default Component;