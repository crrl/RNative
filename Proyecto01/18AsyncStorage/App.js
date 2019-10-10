import React, { Component } from 'react';
import { View,
   Text
  } from 'react-native';
import { style16 as styles } from './style-sheet';
import ComponenteAlmacenamientoAsincrono from './ComponenteAlmacenamientoAsincrono';

export default class App extends Component {

  render () {

    return (
      <ComponenteAlmacenamientoAsincrono />
    )
  }
}
