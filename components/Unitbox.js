export default function UnitBox({ color, ...rest}) {
    return (
        <mesh {...rest}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}