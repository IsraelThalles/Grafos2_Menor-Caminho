import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function Node({id, x, y}) {
    return (
        <TouchableOpacity
            key={id}
            style={{
                backgroundColor: "gray",
                top: y-20,
                left: x-20,
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute"
            }}
        >
            <View
                style={{
                    backgroundColor: "lightgray",
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text>{id}</Text>
            </View>
        </TouchableOpacity>
    )
}