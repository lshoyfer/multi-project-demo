import { useThree } from "@react-three/fiber";
export default function Background() {
    const { scene } = useThree();
    scene.background = "black";
}