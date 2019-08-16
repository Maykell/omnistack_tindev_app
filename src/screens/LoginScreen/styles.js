import { StyleSheet } from "react-native";
import { defaultTheme } from "../../styles/themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultTheme.backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    }
});

export default styles;
