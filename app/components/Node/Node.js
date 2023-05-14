import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function Node({id, x, y, x1, setX1, setX2, setY1, setY2,}) {
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
            onPress={(e) => {
                console.log("x: " + x)
                console.log("y: " + y)
                if(x1 == null) {
                    setX1(x)
                    setY1(y)
                } else {
                    setX2(x)
                    setY2(y)
                }
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