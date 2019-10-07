import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

/*
  Estados tipado:
    -vincular tipos de datos a los valores del estado.
*/

export default class Aplicacion extends Component {
  //1. Definición de la estructura del estadoo
  state = {
    password: String,
    isPasswordVisible: Boolean,
    texto: String
  }

  //2.- Asociación de los valores iniciales al crease la instancia.
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isPasswordVisible: true,
      texto: 'Mostrar'
    }
  }


  // 3.- Cambio del estado.

  cambioApariencia = () => {
    const {isPasswordVisible}  = this.state;

    if (isPasswordVisible) {
      this.setState({isPasswordVisible: false, texto: 'Ocultar'});
    } else {
      this.setState({isPasswordVisible: true, texto: 'Mostrar'});
    }
  }

  render() {
    return(
      <View style={styles.container}>
          <TextInput secureTextEntry={this.state.isPasswordVisible}
                     style={{width: 200, height: 50, fontSize: 20, backgroundColor: 'navy', color: 'white'}}
                     />
          <TouchableOpacity onPress= { this.cambioApariencia }>
            <Text style={{fontSize:30}}>
              {this.state.texto}
            </Text>
          </TouchableOpacity>
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
    }
  }
)