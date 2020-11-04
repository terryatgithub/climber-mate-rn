import React, { useState } from "react";
import { View, Image, Text, ImageBackground, Button, TextInput, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";


export default function HomeScreen() {
    return (
        <View style={[styles.absolute, styles.container]}>
            <Image style={[styles.absolute, styles.backgroundimage]} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')} />
            <LoginForm style={styles.login} />
        </View>
    )
}

const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backgroundimage: {
        resizeMode: 'cover',
    },
    login: {

    }
})