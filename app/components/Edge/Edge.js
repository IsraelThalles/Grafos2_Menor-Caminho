import { Defs, Line, Marker, Path } from 'react-native-svg';

export default function Edge({x1, x2, y1, y2, cor}) {
    return (
        <>
            <Defs>
                <Marker
                    id="arrow"
                    refX={0}
                    refY={3}
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                >
                    <Path d="M 0 0 L 6 3 L 0 6 z" fill={cor} />
                </Marker>
            </Defs>
            <Line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={cor}
                strokeWidth="3"
                markerEnd="url(#arrow)"
            />
        </>
    )
}