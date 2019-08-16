import React, { useRef } from "react";
import PropTypes from "prop-types";
import { TextInput, Text } from "react-native";

import Container from "../Container";
import { colors } from "../../styles";

import styles from "./styles";

const Input = ({
    placeholder,
    value,
    onChangeText,
    error,
    errorText,
    inputRef,
    returnKeyType,
    onSubmitEditing
}) => {
    return (
        <Container style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                selectionColor={colors.orange}
                placeholderTextColor={colors.grey}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                style={styles.input}
                ref={inputRef}
            />
            {error && <Text style={styles.inputTextError}>{errorText}</Text>}
        </Container>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    returnKeyType: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    inputRef: PropTypes.shape({ current: PropTypes.any }),
    error: PropTypes.bool,
    errorText: PropTypes.string
};

Input.defaultProps = {
    error: "",
    returnKeyType: "next"
};

export default Input;
