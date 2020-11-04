import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, NativeModules, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BlurView } from "@react-native-community/blur";

// 在执行任何动画代码之前，比如在入口文件App.js中执行
const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

function HomeScreen() {
  const navigation = useNavigation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function verifyUserName(value) {
    console.log('username: ', value);
    // todo verify
    setUserName(value)
  }

  function updateUserName() {
    setTipX(0)
    setTipY(0)
    setTipOpacity(1)
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

    const [tipX, setTipX] = useState(0)
    const [tipY, setTipY] = useState(17)
    const [tipOpacity, setTipOpacity] = useState(1)
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.logo} source={require('./assets/ComponentBG/drawable-mdpi/ComponentBG.png')} >
        <View style={styles.inputbox}>
          <Text style={[styles.inputtip, {
            top: tipX,
            left: tipY,
            opacity: tipOpacity
          }]}>Username</Text>
          <TextInput style={styles.input} value={userName} onChangeText={verifyUserName} onFocus={updateUserName} />
        </View>

        <View style={styles.inputbox}>
          <Text style={styles.inputtip}>Password</Text>
          <TextInput style={styles.input} value={password} onChangeText={verifyPassword} onFocus={updatePassword} />
        </View>

        <ImageBackground
          style={styles.btnbackground} source={require('./assets/buttonbg.svg')}
        >
          <Button style={styles.button} title="LOGIN" onPress={
            () => {
              navigation.navigate('UserName', {
                userName,
                setUserName
              })
            }
          }></Button>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
}

function UserScreen() {
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
      <Image style={styles.logouser} source={require('./assets/ComponentBG/drawable-mdpi/ComponentBG.png')} />
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={20}
      // reducedTransparencyFallbackColor="white"
      />

      <View style={styles.userinfo}>
        <Image style={styles.avatar} source={require('./assets/avatar.jpeg')} />
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

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserName" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  btnbackground: {
    width: 312,
    height: 39.19,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 16,
    fontFamily: '',
    color: '#FFF',
    opacity: 0.5,
  },
  button: {
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