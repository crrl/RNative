import React, { Component } from 'react';
import { View,
   Text
  } from 'react-native';
  import ComponenteIndicadorActividad from './ComponenteIndicadorActividad';
import { style16 as styles } from './style-sheet';


export default class App extends Component {

  render () {

    return (
      <ComponenteIndicadorActividad />
    )
  }
}
