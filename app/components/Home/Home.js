import { useEffect, useState } from "react";
import { TouchableOpacity, View, } from "react-native";
import Node from "../Node/Node";
import Rodape from "../Rodape/Rodape";
import Svg from 'react-native-svg';
import Edge from "../Edge/Edge";

export default function Home() {
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const [createNodes, setCreateNodes] = useState(false)
    const [createEdges, setCreateEdges] = useState(false)
    const [id, setId] = useState(0)
    const [peso, setPeso] = useState("")
    const [x1, setX1] = useState(null)
    const [y1, setY1] = useState(null)
    const [x2, setX2] = useState(null)
    const [y2, setY2] = useState(null)

    const addNode = (id, x, y) => {
        let newNode = {
            id: id,
            x: x,
            y: y,
            vizinhos: []
        }
        

        setNodes(nodes => [...nodes, newNode])
    }

    const addEdge = (x1, x2, y1, y2, cor) => {
        let newEdge = {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            cor: cor,
            peso: peso
        }

        setEdges(edge => [...edge, newEdge])

        setX1(null)
        setX2(null)
        setY1(null)
        setY2(null)
    }

    useEffect(() => {
        if(y2 != null) {
            addEdge(x1, x2, y1, y2, "gray")
        }
    }, [y2])

    return (
        <>
            <TouchableOpacity
                disabled={!createNodes}
                activeOpacity={1}
                onPress={(e) => {
                    addNode(id, e.nativeEvent.pageX, e.nativeEvent.pageY)
                    setId(id+1)
                }}    
                style={{flex: 1}}
            >
                <View style={{flex: 1}}>
                    <Svg style={{position: "absolute"}}>
                        {edges.length > 0 && edges.map((edge) => {
                            return (
                                <Edge
                                    x1={edge.x1}
                                    y1={edge.y1}
                                    x2={edge.x2}
                                    y2={edge.y2}
                                    cor={edge.cor}
                                />
                            )
                        })}
                    </Svg>

                    {nodes.length > 0 && nodes.map((node) => {
                        return (
                            <Node
                                id={node.id}
                                x={node.x}
                                y={node.y}
                                x1={x1}
                                setX1={(pos) => setX1(pos)}
                                setY1={(pos) => setY1(pos)}
                                setX2={(pos) => setX2(pos)}
                                setY2={(pos) => setY2(pos)}
                            />
                        )
                    })}

                </View>

            </TouchableOpacity>

            <Rodape
                createNodes={createNodes}
                setCreateNodes={(estado) => setCreateNodes(estado)}
                createEdges={createEdges}
                setCreateEdges={(estado) => setCreateEdges(estado)}
                peso={peso}
                setPeso={(peso) => setPeso(peso)}
                apagarGrafo={() => {
                    setNodes([])
                    setEdges([])
                    setId(0)
                }}
            />
        </>
    )
}
