import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { defaultStyle } from './style-sheet';
/*

  FlexLayout son características basadas en CSS3 para el mayor control de la posición de elementos en base a un contenedor.

*/

export default class Aplicacion extends Component {

  render() {

    return(
      <View style={defaultStyle.container}>
        <Text style={{fontSize: 70}}> T  E  S T </Text>
      </View>
    )
  }
}
