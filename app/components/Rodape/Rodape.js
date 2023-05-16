import { View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import Dijkstra from "../../services/Dijkstra";

export default function Rodape({createNodes, setCreateNodes, createEdges, setCreateEdges, peso, setPeso, apagarGrafo, grafo, origem, destino}) {

    return (
        <View
            style={{
                backgroundColor: "rgba(75,75,75,0.7)",
                height: 80,
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}
        >
            <IconButton
                icon="shape-circle-plus"
                iconColor="white"
                size={40}
                disabled={createNodes}
                onPress={() => {
                    setCreateNodes(true)
                    setCreateEdges(false)
                }}
            />
            <IconButton
                icon="vector-line"
                iconColor="white"
                size={40}
                disabled={createEdges}
                onPress={() => {
                    setCreateEdges(true)
                    setCreateNodes(false)
                }}
            />
            {createEdges && <TextInput
                value={peso}
                onChangeText={peso => setPeso(peso)}
                mode="outlined"
                activeOutlineColor="gray"
                textAlign="center"
                placeholder="Peso"
                style={{fontSize: 12, textAlign: "center"}}
            />}
            <IconButton
                icon="calculator-variant"
                iconColor="white"
                size={40}
                onPress={() => {
                    Dijkstra(grafo, origem, destino)
                    console.log(peso)
                }}
                
            />
            <IconButton
                icon="close"
                iconColor="white"
                size={40}
                onPress={() => apagarGrafo()}
            />
        </View>
    )
}