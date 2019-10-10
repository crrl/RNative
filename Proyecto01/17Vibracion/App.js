import React, { Component } from 'react';
import { View,
   Text,
   Vibration
  } from 'react-native';
import { style16 as styles } from './style-sheet';


export default class App extends Component {

  componentDidMount() {
    //Si el argumento es un arreglo, las posiciones pares representan vibración y las nones silencio.
    Vibration.vibrate([1000,2000,3000,4000,5000,6000]);
  }
  render () {

    return (
      <View style = {styles.container}>
        <Text style= {{fontSize: 60}}> Vibración </Text>
      </View>
    )
  }
}
