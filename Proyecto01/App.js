import React, { Component } from 'react';
import { View,
   Text,
   Animated, // Para aplicar elementos de animación.
   Easing, // Efectos asociados a las animaciones.
   TouchableHighlight
  } from 'react-native';
import { defaultStyle } from './style-sheet';


export default class App extends Component {

  constructor () {
    super()
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  animate () {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 500, Easing.ease),
      createAnimation(this.animatedValue2, 800, Easing.ease, 500),
      createAnimation(this.animatedValue3, 800, Easing.ease, 1300)        
    ]).start()
  }


  render () {
    // El título se va a expandir.
    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    });

    // El subtítulo gira.
    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    });

    // El botón se presenta desde la parte superior del view port.
    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400]
    });

    return (
      <View style={defaultStyle.container}>
        <Animated.View style={{ transform: [{scale: scaleText}] }}>
          <Text style= {defaultStyle.titulo}>Coppel</Text>
        </Animated.View>
        <Animated.View style={{ marginTop: 20, transform: [{rotate: spinText}]}}>
          <Text style= {defaultStyle.subTitulo}>Bienvenido al Curso!</Text>
        </Animated.View>
        <Animated.View style={{top: introButton, position: 'absolute'}}>
          <TouchableHighlight style= {defaultStyle.boton}
                              onPress={() => this.animate()}>
            <Text style={defaultStyle.textoBoton}> Reiniciar</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    )
  }
}
