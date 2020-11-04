// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navRef, navigate, goBack } from './utils/navService';

function HomeScreen() {
  // const { navigation } = props
  // const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
      {/* <HomeButton navigation={navigation}/> */}
      <HomeButton />
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')}></Button>
    </View>
  );
}
function HomeButton(props) {
  // const {navigation} = props
  // const navigation = useNavigation()
  const [text, setText] = useState('')

  return (<TouchableOpacity
    style={styles.button}
    // onPress={() => navigation.navigate('Detail')}
    onPress={() => navigate('Detail', {
      somekey: '主页传值',
      setText: setText
    })}
  >
    <Text style={{ fontSize: 40 }}>Go to Detail</Text>
    <Text style={{ fontSize: 40 }}>{text}</Text>
  </TouchableOpacity>
  )
}
function DetailScreen(props) {
  const { navigation } = props

  const { route } = props
  const { somekey, setText } = route.params

  const valueFromDetail = '从详情页传的值22'

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
      <Text style={{ fontSize: 40, color: 'white' }}>Detail Screen {somekey}</Text>
      {/* <Button title="Go back" onPress={() => { navigation.goBack() }} /> */}
      <Button title="Go back" onPress={() => {
        setText(valueFromDetail)
        goBack()
      }} />
      <Button title="Go to Detail... navigate" onPress={() => navigation.navigate('Detail')} />
      <Button title="Go to Detail... push" onPress={() => navigation.push('Detail')} />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator headerMode="float">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: {
    height: 100,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: 'green'
  }
})

export default App;