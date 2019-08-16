import { StyleSheet } from "react-native";
import { defaultTheme } from "../../styles/themes";
import { colors } from "../../styles";

const styles = StyleSheet.create({
    logo: {
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: defaultTheme.backgroundColor,
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardContainer: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 8,
        margin: 30,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    avatar: {
        flex: 1,
        height: 250
    },
    footer: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.greyDark
    },
    bio: {
        fontSize: 14,
        color: colors.grey,
        marginTop: 8,
        lineHeight: 15
    },
    buttonsContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
});

export default styles;
