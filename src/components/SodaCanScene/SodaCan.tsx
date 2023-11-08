import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react"
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh, MeshStandardMaterial, Vector3 } from "three";

const Component = () => {
    const model = useLoader(OBJLoader, '/models/sodacan.obj', undefined, (p) => console.log(p));
    const material = new MeshStandardMaterial({ color: 0xffffff, metalness: 1 });

    const geometry = useMemo(() => {
        let g;
        model.traverse((c: any) => {
            if (c.type === "Mesh") {
                const _c = c as Mesh;
                g = _c.geometry;
            }
        });

        return g;
    }, [model]);

    const mesh = useRef<any>();

    useFrame((_, delta) => {
        if (mesh?.current)
            mesh.current.rotation.y += 1 * delta
    });

    return (
        <primitive
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
    )
}

export default Component;