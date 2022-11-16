import { useRef } from 'react'
import { Line, Text3D } from '@react-three/drei';
import Tick from './Tick';
import uuid4 from 'uuid4';
import font from '../data/font.json';

const drawTicks = (axis, amt) => {
    let ticks = [];
    for (let i = -10; i < amt-9; i++) {
        if (i !== 0 ) ticks.push(<Tick key={uuid4()} axis={axis} offset={i}/>);
    }
    return ticks;
}

export default function Axis() {
    const test = useRef();

    return (
        <>
            {/* z */}
            <group>
                <Text3D rotation={[0, 0, 0]} position={[-1, 0, 11]} font={font}>
                    y {/* this is actually the Z axis internally */}
                    <meshNormalMaterial />
                </Text3D>
                <Text3D rotation={[0, 0, 0]} position={[0, 11, -1]} font={font}>
                    z {/* this is actually the Y axis internally */}
                    <meshNormalMaterial />
                </Text3D>
                <Text3D rotation={[0, 0, 0]} position={[11, 0, -1]} font={font}>
                    x
                    <meshNormalMaterial />
                </Text3D>
            </group>

            <Line 
                points={[[0, 0, -10], [0, 0, 10]]}
                color="blue"
                lineWidth={2}
            />
            {/* y */}
            <Line 
                points={[[0, -10, 0], [0, 10, 0]]}
                color="green"
                lineWidth={2}
            />

            {/* x */}
            <Line 
                points={[[-10, 0, 0], [10, 0, 0]]}
                color="red"
                lineWidth={2}
            />

            {drawTicks("x", 20)}
            {drawTicks("y_x", 20)}
            {drawTicks("y_z", 20)}
            {drawTicks("z", 20)}
        </>
    )
}
