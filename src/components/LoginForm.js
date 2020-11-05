import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
        <View style={styles.container}>
            <InputBox inputkey="Username" inputvalue={userName} verifyValue={verifyUserName} updateValue={updateUserName} />
            <InputBox secureTextEntry={true} inputkey="Password" inputvalue={password} verifyValue={verifyPassword} updateValue={updatePassword} />
            <LoginButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 75
    }
})