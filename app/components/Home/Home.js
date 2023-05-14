import { useState } from "react";
import { TouchableOpacity, View, } from "react-native";
import Node from "../Node/Node";
import Rodape from "../Rodape/Rodape";

export default function Home() {
    const [nodes, setNodes] = useState([])
    const [createNodes, setCreateNodes] = useState(false)
    const [createEdges, setCreateEdges] = useState(false)
    const [id, setId] = useState(0)
    const [peso, setPeso] = useState("")

    const addNode = (id, x, y) => {
        let no = {
            id: id,
            x: x,
            y: y,
            vizinhos: []
        }

        setNodes(nodes => [...nodes, no])
    }

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
                    {nodes.length > 0 && nodes.map((node) => {
                        return (
                            <Node id={node.id} x={node.x} y={node.y}/>
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
                apagarGrafo={() => setNodes([])}
            />
        </>
    )
}