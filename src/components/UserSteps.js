import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "./ProgressBar";

export default function UserSteps() {
    // 获取用户信息 展示头像
    const [stepNum, setStepNum] = useState(12000)
    useEffect(() => {
        setTimeout(() => {
            setStepNum(14000)
        }, 400)
    })
    return (
        <View style={styles.container}>
            <ProgressBar />
            <View style={styles.details}>
                <Text style={styles.steptip}>Steps</Text>
                <Text style={styles.stepnum}>{stepNum}</Text>
                <Text style={styles.stepdate}>Today</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        position: 'absolute',
    },
    steptip: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Helvetica',
        lineHeight: 42,
        textAlign: 'center'
    },
    stepnum: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        lineHeight: 60,
        textAlign: 'center'
    },
    stepdate: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Helvetica',
        lineHeight: 19,
        textAlign: 'center'
    },
    progress: {
    }
})