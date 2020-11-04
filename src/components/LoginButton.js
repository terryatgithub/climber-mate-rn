import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginButton() {
    const navigation = useNavigation()
    const [img, setImg] = useState(require('../../assets/buttonbg.png'))
    const onPress = () => {
        setImg(require('../../assets/buttonbgactive.png'))
        navigation.navigate('UserName')
    }
    return (
        <View style={[styles.container, ]}>
            <Pressable style={[styles.button]} onPress={onPress} >
                <ImageBackground
                    roundAsCircle={true}
                    imageStyle={{ borderRadius: 20 }}
                    style={styles.image} source={img}
                >
                    <Text style={styles.label}>LOGIN</Text>
                </ImageBackground>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 312,
        height: 39.19,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1
    },
    label: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: 'rgba(255,255,255,0.5)',
    }
})