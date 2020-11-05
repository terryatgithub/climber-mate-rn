import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";

export default function HomeScreen() {
    return (
        // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundimage} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')}>
                <LoginForm style={styles.login} />
            </ImageBackground>
        </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    login: {
        paddingBottom: 20

    }
})