import React, { forwardRef } from 'react'
import { Canvas  } from '@react-three/fiber'
import SodaCan from './SodaCan';
import { motion } from 'framer-motion-3d';
import { MotionValue } from 'framer-motion';

type SodaCanSceneProps = {
    className?: string;
    color?: string | MotionValue<string>;
    style?: React.CSSProperties;
};

const Component: React.FC<SodaCanSceneProps> = forwardRef((props, ref) => {
    const { className, color = "#C850C0", style } = props;

    return (
        <Canvas shadows className={className} style={style}>
            <motion.directionalLight castShadow intensity={2} position={[10, 10, 10]} color={color} />
            <motion.directionalLight castShadow intensity={2} position={[10, 0, 10]} color={color} />
            <motion.directionalLight castShadow intensity={2} position={[0, 0, 10]} color={color} />
            <SodaCan />
        </Canvas>
    )
});

export default Component;