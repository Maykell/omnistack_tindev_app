import React, { useState, useEffect, useRef } from "react";
import { Image, KeyboardAvoidingView, Platform } from "react-native";

import { AppInput, AppButton } from "../../components";
import { devService } from "../../services/api";

import { images, screens } from "../../config";
import { asyncStorage } from "../../utils";

import styles from "./styles";

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState("");

    const userRef = useRef();

    useEffect(() => {
        _focusUsername();
        _goToMain();
    }, []);

    _focusUsername = () => {
        userRef.current.focus();
    };

    _goToMain = async () => {
        const user = await asyncStorage.getUser();

        if (user !== null) {
            const { _id } = user;
            navigation.navigate(screens.MainScreen, { _id });
        }
    };

    _handleLogin = async () => {
        if (user.length <= 0) return;

        const response = await devService.create(user);
        const { _id } = response;
        asyncStorage.setUser(_id);
        navigation.navigate(screens.MainScreen, { _id });
    };

    const _showErrror = user.length <= 0;

    return (
        <KeyboardAvoidingView
            behavior="padding"
            enabled={Platform.OS === "ios"}
            style={styles.container}
        >
            <Image source={images.logo} />
            <AppInput
                placeholder="Digite seu usuário no Github"
                value={user}
                onChangeText={setUser}
                error={_showErrror}
                errorText="Usuário inválido..."
                onSubmitEditing={() => _handleLogin}
                returnKeyType="done"
                inputRef={userRef}
            />
            <AppButton name="Continuar" onPress={_handleLogin} />
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
