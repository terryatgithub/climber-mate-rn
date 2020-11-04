import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import UserInfo from "../components/UserInfo";
import UserSteps from "../components/UserSteps";

export default function UserScreen() {
    return (
        <View style={styles.absolute}>
            <Image style={[styles.absolute, styles.logo]} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')} />
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={30}
            // reducedTransparencyFallbackColor="white"
            />
            <UserInfo style={styles.userinfo} />
            <View style={[styles.absolute, styles.flex]}>
                <UserSteps style={styles.steps} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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