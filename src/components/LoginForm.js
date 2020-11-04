import React, { useState } from "react";
import { View, Text, ImageBackground, Button, TextInput, StyleSheet } from "react-native";
import InputBox from "./InputBox";
import LoginButton from "./LoginButton";

export default function LoginForm() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function verifyUserName(value) {
        console.log('username: ', value);
        // todo verify
        setUserName(value)
    }

    function updateUserName() {
        setUserName('climber@gmail.com')
    }

    function updatePassword() {
        setPassword('11111111')
    }

    function verifyPassword(value) {
        console.log('password: ', value);
        // todo verify
        setPassword(value)
    }

    return (
        <View>
            <InputBox inputkey="Username" inputvalue={userName} verifyValue={verifyUserName} updateValue={updateUserName} />
            <InputBox inputkey="Password" inputvalue={password} verifyValue={verifyPassword} updateValue={updatePassword} />
            <LoginButton />
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
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
        // padding: 8
    },
    logo: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // width: null,
        // height: null
    },
})