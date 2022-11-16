import { Canvas } from '@react-three/fiber';
import Axis from '../components/Axis';
import CameraOrbiter from '../components/CameraOrbiter';
import UnitBox from '../components/unitbox';
import Background from '../components/Background';
import DemoArrow from '../components/DemoArrow';

export default function Home() {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [5, 5, 5]
      }}
    >
      <Background />
      <CameraOrbiter />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Axis />

      <DemoArrow direction={[0, 5, 0]} length={1} color="orange" />
      {/* <UnitBox position={[1,0,0]} color="red"/> */}
      {/* <UnitBox position={[0,1,0]} color="green"/> */}
      {/* <UnitBox position={[0,0,1]} color="blue"/> */}
    </Canvas>
  )
}

