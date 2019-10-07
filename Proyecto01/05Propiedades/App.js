import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

/*
  Propiedades:
    -Datos en los componentes que no son mutales.
*/

export default class Aplicacion extends Component {

  render() {
    let laImagen = {
      uri: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg'
    };

    return(
      <View style={styles.container}>
        <Image source={laImagen} style = {styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: 400,
      height: 300
    }
  }
)