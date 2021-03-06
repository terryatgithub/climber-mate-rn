import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import UserInfo from "../components/UserInfo";
import UserSteps from "../components/UserSteps";

export default function UserScreen() {
    return (
        // <SafeAreaView style={styles.container}>
        <View style={[styles.container, styles.absolute]}>
            <ImageBackground style={[styles.logo, styles.absolute]} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')} >
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={20}
                // reducedTransparencyFallbackColor="white"
                />
            </ImageBackground>
            <UserInfo style={styles.userinfo} />
            <View style={[styles.absolute, styles.flex]}>
                <UserSteps style={styles.steps} />
            </View>
        </View>
        // </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    logo: {
        flex: 1,
        resizeMode: 'cover',
    },
    userinfo: {
        position: 'absolute',
        top: 42,
        left: 26
    },
})