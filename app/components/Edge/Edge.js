import { Line } from 'react-native-svg';

export default function Edge({x1, x2, y1, y2, cor}) {
    return (
        <Line x1={x1} y1={y1} x2={x2} y2={y2} stroke={cor} strokeWidth="3" />
    )
}