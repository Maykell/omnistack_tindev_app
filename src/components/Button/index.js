import React from "react";
import PropTypes from "prop-types";

import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = ({ name, onPress }) => (
    <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
);

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func
};

export default Button;
