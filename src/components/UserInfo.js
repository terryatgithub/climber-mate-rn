import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function UserInfo() {
    // 获取用户信息 展示头像
    return (
        <View style={styles.userinfo}>
            <Image style={styles.avatar} source={require('../../assets/avatar.jpeg')} />
            <Text style={styles.name}>Climber</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userinfo: {
        paddingLeft: 26,
        paddingTop: 42,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 76,
        height: 76,
        borderRadius: 76
    },
    name: {
        flex: 1,
        color: 'black',
        fontSize: 30,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginLeft: 16
    },
})