import { Line } from '@react-three/drei';
export default function Tick({ axis, offset }) {
    let points = [];
    let color = "";
    switch (axis) {
        case "x":
            points = [[offset, 0, -0.25], [offset, 0, 0.25]];
            color = "red";
            break;
        case "z":
            points = [[-0.25, 0, offset], [0.25, 0, offset]];
            color = "blue";
            break;
        case "y_x":
            points = [[-0.25, offset, 0], [0.25, offset, 0]];
            color = "green";
            break;
        case "y_z":
            points = [[0, offset, -0.25], [0, offset, 0.25]];
            color = "green";
            break;
    }

    return (
        <Line 
            points={points}
            color={color}
            lineWidth={2}
        />
    );
}