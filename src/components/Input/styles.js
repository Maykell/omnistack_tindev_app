import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignSelf: "stretch"
    },
    input: {
        height: 50,
        alignSelf: "stretch",
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.greyLight,
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 16
    },
    inputTextError: {
        color: colors.red500,
        fontSize: 10,
        fontWeight: "bold",
        marginHorizontal: 5,
        marginVertical: 5
    }
});

export default styles;
