import React, { Component } from 'react';
import { View,
   Text
  } from 'react-native';
  import * as Bateria from 'expo-battery';

  import { defaultStyle } from './style-sheet';
export default class App extends Component {

  state = {
    nivelBateria: null
  }

  async procesa() {
    let nivelBateria = await Bateria.getBatteryLevelAsync();
    this.setState({
      nivelBateria
    })
  }

  componentDidMount() {
    this.procesa();
  }
  
  render () {
  
    return (
      <View style={defaultStyle.container}>
        <Text>
          {this.state.nivelBateria}
        </Text>
      </View>
    )
  }
}
