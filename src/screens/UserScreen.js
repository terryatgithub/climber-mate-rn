import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BlurView } from "@react-native-community/blur";

export default function UserScreen() {
    // 获取用户信息 展示头像
    let circularProgress = null
    const [stepNum, setStepNum] = useState(12000)
    useEffect(() => {
        setTimeout(() => {
            circularProgress.animate(42, 600); // Will fill the progress bar linearly in 8 seconds
            setStepNum(14000)
        }, 400)
    })
    return (
        <View style={styles.containeruser}>
            <Image style={styles.logouser} source={require('../../assets/ComponentBG/drawable-mdpi/ComponentBG.png')} />
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={20}
            // reducedTransparencyFallbackColor="white"
            />

            <View style={styles.userinfo}>
                <Image style={styles.avatar} source={require('../../assets/avatar.jpeg')} />
                <Text style={styles.name}>Climber</Text>
            </View>

            <View style={styles.detailswrapper}>
                <AnimatedCircularProgress
                    size={300}
                    rotation={270}
                    width={25}
                    fill={25}
                    tintColor="#FF0000"
                    backgroundColor="lightgrey"
                    lineCap="round"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    ref={(ref) => circularProgress = ref}
                />
                <View style={styles.details}>
                    <Text style={styles.steptip}>Steps</Text>
                    <Text style={styles.stepnum}>{stepNum}</Text>
                    <Text style={styles.stepdate}>Today</Text>
                </View>
            </View>
            {/* </ImageBackground> */}
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
    containeruser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logouser: {
        flex: 1,
        resizeMode: 'cover',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },

    userinfo: {
        position: 'absolute',
        left: 26,
        top: 42,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 76,
        height: 76,
        borderRadius: 76
    },
    name: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginLeft: 16
    },
    detailswrapper: {
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