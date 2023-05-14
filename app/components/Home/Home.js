import { useState } from "react";
import { TouchableOpacity, View, } from "react-native";
import Node from "../Node/Node";

export default function Home() {
    const [nodes, setNodes] = useState([])
    const [id, setId] = useState(0)

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
        <TouchableOpacity
            disabled={false}
            activeOpacity={1}
            onPress={(e) => {
                addNode(id, e.nativeEvent.pageX, e.nativeEvent.pageY)
                setId(id+1)
            }}    
            style={{flex: 1}}
        >
            <View style={{flex: 1}}>
                {nodes.length > 0 && nodes.map((node, index) => {
                    return (
                        <Node id={node.id} x={node.x} y={node.y} key={index}/>
                    )
                })}
            </View>
        </TouchableOpacity>
    )
}