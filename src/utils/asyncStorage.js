import AsyncStorage from "@react-native-community/async-storage";

const setUser = async value => {
    try {
        await AsyncStorage.setItem("@app:user", value);
    } catch (error) {
        console.log("setUser: AsyncStorageUtil -> ", error);
    }
};

const getUser = async () => {
    try {
        return await AsyncStorage.getItem("@app:user");
    } catch (error) {
        console.log("getUser: AsyncStorageUtil -> ", error);
    }
};

const clear = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log("clear: AsyncStorageUtil -> ", error);
    }
};
export default { setUser, getUser, clear };
