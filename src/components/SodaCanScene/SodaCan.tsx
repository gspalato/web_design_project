import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react"
import { Text } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MeshPhysicalMaterial, Vector3 } from "three";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { motion } from "framer-motion-3d";

const Component: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const model = useLoader(OBJLoader, '/models/sodacan.obj', undefined, (p) => {
        setProgress(p.loaded / p.total);
        console.log(p.loaded / p.total);
    });

    const texture = useLoader(RGBELoader, '/models/envmap.hdr');

    const material = new MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 1,
        roughness: 0,
        sheen: 1,
        iridescence: .5,
        envMap: texture
    });

    const mesh = useRef<any>();

    useFrame((_, delta) => {
        if (mesh?.current)
            mesh.current.rotation.y += 1 * delta
    });

    return (
        <motion.primitive
            object={model}
            receiveShadow
            castShadow
            ref={mesh}
            position={new Vector3(0, -1.8, 0)}
            scale={new Vector3(30, 30, 30)}
            rotation-x={.05}
            rotation-z={.05}
            material={material}
        />
    );
}

export default Component;