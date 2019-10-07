import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';



export default class Aplicacion extends Component {

  state = {
    mensaje: 'Sede: Coppel'
  }

  actualizarEstado = () => {
      this.setState({mensaje: 'Sede: CDMX'})
  }
  render() {
    return(
      <View style={styles.container}>
          <Text onPress={this.actualizarEstado}
                style="{{fontSize: 40}}">
          {this.state.mensaje}
          </Text>
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