import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Animated, Easing } from "react-native";


export default function InputBox(props) {
    const { inputkey, inputvalue, verifyValue, updateValue, secureTextEntry } = props
    const [inputActive, setInputActive] = useState(false)

    const tipAnim = useRef(new Animated.Value(17)).current
    const tipMove = () => {
        updateValue()
        setInputActive(true)
        Animated.spring(tipAnim, {
            toValue: -5,
            duration: 1200,
            easing: Easing.ease,
            useNativeDriver: false
        }).start(() => {
        })
    }

    const handleFocus = () => {
        tipMove()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.tips, {
                top: tipAnim,
            }]}>
                <Text style={styles.tiptext}>{inputkey}</Text>
            </Animated.View>
            <TextInput secureTextEntry={secureTextEntry} style={[styles.input, inputActive ? styles.inputactive : {}, secureTextEntry ? styles.inputpassword : {}]} value={inputvalue} onChangeText={verifyValue} onFocus={handleFocus} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 312,
        height: 39.5,
        marginBottom: 18.5,
        justifyContent: 'flex-end'
    },
    tips: {
        position: 'absolute',
        // top: 0,
    },
    tiptext: {
        color: '#7B7B7B',
        fontSize: 12,
        textAlign: 'left',
    },
    input: {
        flex: 1,
        paddingVertical: 6.5,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: '#7B7B7B',
    },
    inputpassword: {
        borderBottomColor: '#E5E5E5',
    },
    inputactive: {
        color: '#E5E5E5',
        paddingVertical: 5,
    }

})