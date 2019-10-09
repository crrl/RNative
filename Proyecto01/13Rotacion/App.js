import React, { Component } from 'react';
import { View,
   Text,
   Animated, // Para aplicar elementos de animación.
   Easing // Efectos asociados a las animaciones.
  } from 'react-native';
import { defaultStyle } from './style-sheet';

export default class App extends Component {

  constructor() {
    super();
    // Valor inicial aportado por el objeto Animated.Value para girar la imagen
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.gira();
  }

  // Método que implementa la animación.
gira() {
  this.spinValue.setValue(0) // Posición de la animación
    // Modificar el valor de la nimación durante un periodo.
  Animated.timing(
    //Valor
    this.spinValue,
    // Configuración de la animación.
    {
      toValue: 1,        // Representa el porcentaje de la animación (0..1).
      duration: 5000,       // Milisegundos en lo que se realiza la animación.
      easing: Easing.linear // Tipo de efectos sobre la animación
    }
  // Método asincrono a ejecutar una vez terminada la animación.
  ).start(() => this.gira());
}

  render () {
    const image = {
      uri: 'https://previews.123rf.com/images/djvstock/djvstock1706/djvstock170608859/80423592-figura-sim%C3%A9trica-icono-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial.jpg'
    }
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3600deg']
    })
    return (
      <View style={defaultStyle.container}>
        <Animated.Image
          style={{
            width: 277,
            height: 250,
          transform: [{rotate: spin}]
          }} 
          source={image}
          />
      </View>
    )
  }
}
