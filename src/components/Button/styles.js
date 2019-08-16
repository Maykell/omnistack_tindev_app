import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles";

const styles = StyleSheet.create({
    button: {
        height: 50,
        alignSelf: "stretch",
        backgroundColor: colors.orange,
        borderRadius: 4,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default styles;
