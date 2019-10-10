import React, { Component } from 'react';
import { View,
   Text
  } from 'react-native';

  //Instalar las siguientes dependencias con "expo install" e importarlas posteriormente.
import * as Brillo from 'expo-brightness';
import * as Permisos from 'expo-permissions';

export default class App extends Component {


  async procesa() {
    await Permisos.askAsync(Permisos.SYSTEM_BRIGHTNESS);

    const { status } = await Permisos.getAsync(Permisos.SYSTEM_BRIGHTNESS);
    console.log(status);
    if (status === 'granted') {
      //de 0 a 1
      Brillo.setSystemBrightnessAsync(0);
    }
  }

  componentDidMount() {
    this.procesa();
  }

  render () {
    
    return (
      <View>
        <Text>
          Brillox
        </Text>
      </View>
    )
  }
}
