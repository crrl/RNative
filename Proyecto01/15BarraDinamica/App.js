import React, { Component } from 'react';
import { View,
   Text,
   Animated
  } from 'react-native';
import { style15 as defaultStyle } from './style-sheet';


export default class App extends Component {

  state = {
    progreso: 0,
    color: 'black'
  }

  anim = new Animated.Value(0);
  
  
  componentDidMount() {
    this.animar();
  }  
  
  animar = () => {
    maxValue = 2000;
    myColor = 'blue';
    this.anim.addListener(({ value })  => {
      if ((value/maxValue) * 100 >= 30) {
        myColor = 'black';
      } else {
        myColor = 'red';
      }
      this.setState({ progreso: (value/maxValue) * 100, color: myColor });
    });
    Animated.timing(this.anim, {
      toValue: maxValue,
      duration: 10000
    }).start();
  };

  render () {

    return (
      <View style={defaultStyle.container}>
        <Animated.View
          style= {[defaultStyle.interior, {width: `${this.state.progreso}%`}]}>
          </Animated.View>
          <Animated.Text style= {[defaultStyle.etiqueta, {color: this.state.color}]}>{Math.floor(this.state.progreso)}</Animated.Text>

      </View>
    )
  }
}
