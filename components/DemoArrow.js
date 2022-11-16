import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import EventCube from "./EventCube";

export default function DemoArrow({ direction, length, color }) {
    const [alive, setAlive] = useState(false);
    const [phiRotated, setPhiRotated] = useState(false);
    const [thetaRotated, setThetaRotated] = useState(false);
    const [sphereVisible, setSphereVisible] = useState(false);
    const arrow = useRef();
    const phi = useRef(Math.PI/128); // there appears to be some overshoot by 1 step 
    const theta = useRef(Math.PI/128);
    const bothEase = useRef(false);
    const thetaFirst = useRef(false);

    useFrame(() => {
        if (phiRotated && phi.current < Math.PI/2) {
            arrow.current.rotation.x += Math.PI/128;
            phi.current += Math.PI/128;
        }
        if (thetaRotated && theta.current < Math.PI/4)  {
            if (arrow.current.rotation.x === 0 && !phiRotated) thetaFirst.current = true;
            else if (thetaFirst.current);
            else {
                arrow.current.rotation.z += bothEase.current ? Math.PI/256 : Math.PI/128;
                theta.current += bothEase.current ? Math.PI/256 : Math.PI/128;
            }
        }
    });

    const spawnArrow = () => { // changing visibility wouldn't as easily reset its internals as this
        setAlive(true);
    }
    const rotatePhi = () => {
        setPhiRotated(true);
    }
    const rotateTheta = () => {
        setThetaRotated(true);
    }
    const rotateBoth = () => {
        setPhiRotated(true);
        setThetaRotated(true);
        bothEase.current = true;
    }

    const resetArrow = () => {
        setAlive(false);
        setPhiRotated(false);
        setThetaRotated(false);
        setSphereVisible(false);
        phi.current = Math.PI/128;
        theta.current = Math.PI/128;
        bothEase.current = false;
        thetaFirst.current = false;
    }

    const onSphereVisible = () => {
        setSphereVisible(true);
    }

    const { scene } = useThree();
    if (alive) return (
        <>
            <group ref={arrow}>
                <mesh position={[0, 2, 0]}>
                    <boxGeometry args={[.1, 4, 0.1]} />
                    <meshBasicMaterial color="white"/>
                </mesh>
                <mesh position={[0, 4, 0]}>
                    <coneGeometry args={[.2, .2, 8, 1, false]}/>
                    <meshBasicMaterial color="white"/>
                </mesh>
            </group>

            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2.00124960965618*2+.2]} />
                <meshBasicMaterial transparent opacity={sphereVisible ? 0.25 : 0} color="white" />
            </mesh>

            {!sphereVisible && <EventCube onClick={onSphereVisible} position={[-8, 0, -4]} color="white" />}
            {!phiRotated && <EventCube onClick={rotatePhi} position={[-8, 0, -2]} color="yellow" />}
            {!thetaRotated && <EventCube onClick={rotateTheta} position={[-6, 0, -2]} color="orange" />}
            {!phiRotated && !thetaRotated && <EventCube onClick={rotateBoth} position={[-4, 0, -2]} color="hotpink" />}
            {phiRotated && thetaRotated && <EventCube onClick={resetArrow} position={[-10, 0, -2]} color="green" />}

        </>
    );
    else return (
        <EventCube onClick={spawnArrow} position={[-10, 0, -2]} color="green" />
    );
}