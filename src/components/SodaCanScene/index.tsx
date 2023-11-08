import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import SodaCan from './SodaCan';

type SodaCanSceneProps = {
    className?: string;
    color?: string;
    style?: React.CSSProperties;
};

const Component: React.FC<SodaCanSceneProps> = (props) => {
    const { className, color = "#C850C0", style } = props;

    return (
        <Canvas shadows className={className} style={style}>
            <directionalLight castShadow intensity={2} position={[10, 10, 10]} color={color} />
            <directionalLight castShadow intensity={2} position={[10, 0, 10]} color={color} />
            <directionalLight castShadow intensity={2} position={[0, 0, 10]} color={color} />
            <SodaCan />
        </Canvas>
    )
}

export default Component;