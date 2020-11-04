import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


export default function InputBox(props) {
    const { inputkey, inputvalue, verifyValue, updateValue } = props

    const [tipX, setTipX] = useState(0)
    const [tipY, setTipY] = useState(17)
    const [tipOpacity, setTipOpacity] = useState(1)

    const handleFocus = () => {
        setTipX(0)
        setTipY(0)
        setTipOpacity(1)
        updateValue()
    }
    console.log(inputkey);
    
    return (
        <View style={styles.inputbox}>
            <Text style={[styles.inputtip, {
                top: tipX,
                left: tipY,
                opacity: tipOpacity
            }]}>{inputkey}</Text>
            <TextInput style={styles.input} value={inputvalue} onChangeText={verifyValue} onFocus={handleFocus} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputbox: {
        width: 312,
        height: 40,
        marginBottom: 18.5,
    },
    inputtip: {
        position: 'absolute',
        fontSize: 12,
        color: '#7B7B7B',
        textAlign: 'left',
    },
    input: {
        width: 312,
        height: 40,
        paddingTop: 16.5,
        paddingBottom: 6.5,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: '#7B7B7B',
    },

})