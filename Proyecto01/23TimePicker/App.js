import React, { Component } from 'react';
import { View,
   Text,
   TimePickerAndroid
  } from 'react-native';

  import { defaultStyle } from './style-sheet';

export default class App extends Component {

    state = {
      hour: 0,
      minute: 0
    }
  
  async procesa() {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 15,
        minute: 48,
        mode:'clock',
        is24Hour: false
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({
          hour,
          minute
        });
      }
    } catch(e) {
      alert('Error debido a ' + e);
    }
  }

  componentDidMount() {
    this.procesa();
  }
  
  render () {
  
    return (
      <View style={defaultStyle.container}>
          <Text>{this.state.hour} {this.state.minute}</Text>
      </View>
    )
  }
}
