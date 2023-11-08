import Page from "@/components/Page";
import SodaCanScene from "@/components/SodaCanScene";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useBackground } from "@/lib/providers/BackgroundProvider";

const flavors = [
    {
        name: 'Lemon',
        color: '#00ff22',
        background: '#00ff00',
        description: 'Intense lemon flavor in every sip!'
    },
    {
        name: 'Blueberry',
        color: '#6600ff',
        background: '#0000ff',
        description: ''
    },
    {
        name: 'Beans',
        color: '#964b00',
        background: '#964b00',
        description: 'Liquid carbohydrates. 🤤'
    },
    {
        name: 'Pineapple',
        color: '#f8da5b',
        background: '#f8da5b',
        description: ''
    }
]

const Component = () => {
    const [index, setIndex] = useState(0);

    const { setBackground } = useBackground();

    const handleSelect = (k: number) => {
        setIndex(k);
        setBackground(flavors[k].background);
    }

    return (
        <Page>
            <SodaCanScene className="position-absolute" color={flavors[index].color} />
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={(swiper) => handleSelect(swiper.activeIndex)}
                onSwiper={(swiper) => handleSelect(swiper.activeIndex)}
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
                                <p style={{ color: '#fff' }} className="fs-4">{flavor.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Page>
    );
}

export default Component;