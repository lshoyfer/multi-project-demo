import { useState } from "react"

// This outlines the cubes which are used for controls
export default function EventCube({ onClick, position, color }) {
    const [hovered, setHover] = useState(false);
    if ('red' === color.toLowerCase()) color = 'blue'; // in case I forget
    return (
        <mesh 
            onClick={onClick}
            position={position}
            onPointerOver={() => setHover(true)} 
            onPointerOut={() => setHover(false)} 
            scale={hovered ? 1.2 : 1}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={hovered ? 'red' : color}/>
        </mesh>
    )
}