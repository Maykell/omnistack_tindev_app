import React, { useState, useEffect } from "react";

import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from "react-native";

import { ListEmpty } from "../../components";

import { images, screens } from "../../config";
import { colors } from "../../styles";
import { asyncStorage } from "../../utils";

import styles from "./styles";

import { devService } from "../../services/api";

const MainScreen = ({ navigation }) => {
    const userId = navigation.getParam("_id");
    console.log("USER ID ", userId);
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        _loadDevs(userId);
    }, [userId]);

    _loadDevs = async id => {
        const devs = await devService.findAll(id);
        setDevs(devs);
    };

    _handleLike = async () => {
        const [dev, ...others] = devs;

        const response = await devService.like(userId, dev._id);
        if (response !== null) {
            setDevs(others);
        }
    };

    _handleDislike = async id => {
        const [dev, ...others] = devs;

        const response = await devService.dislike(userId, dev._id);
        if (response !== null) {
            setDevs(others);
        }
    };

    _handleLogout = () => {
        asyncStorage.clear();
        navigation.navigate(screens.LoginScreen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={_handleLogout}>
                <Image style={styles.logo} source={images.logo} />
            </TouchableOpacity>

            {devs.length > 0 ? (
                <View style={styles.cardContainer}>
                    {devs.map((dev, index) => (
                        <View
                            key={dev._id}
                            style={[
                                styles.card,
                                { zIndex: devs.length - index }
                            ]}
                        >
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: dev.avatar
                                }}
                            />
                            <View style={styles.footer}>
                                <Text style={styles.name}>{dev.name}</Text>
                                <Text numberOfLines={3} style={styles.bio}>
                                    {dev.bio}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            ) : (
                <ListEmpty
                    colorText={colors.grey}
                    title="Não há mais nada no momento :)"
                />
            )}

            {devs.length > 0 && (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={_handleDislike}
                        style={styles.button}
                    >
                        <Image source={images.dislike} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={_handleLike}
                        style={styles.button}
                    >
                        <Image source={images.like} />
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default MainScreen;
