import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import UserInfo from "../components/UserInfo";
import UserSteps from "../components/UserSteps";

export default function UserScreen() {
    // 获取用户信息 展示头像

    return (
        <View style={styles.container}>
            <Image style={[styles.absolute, styles.logo]} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')} />
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={20}
            // reducedTransparencyFallbackColor="white"
            />
            <UserInfo style={styles.userinfo} />
            <UserSteps style={styles.steps} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        resizeMode: 'cover',
    },
    userinfo: {
        marginLeft: 26,
        marginTop: 42,
        height: 76,
        alignSelf: 'flex-start'
    },
    steps: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
})