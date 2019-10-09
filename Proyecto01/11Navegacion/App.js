import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import { defaultStyle } from './style-sheet';

class Aplicacion extends Component {

  /*
    Navegación
     - Instalación de dependencias
      npm install react-navigation --save
      npm install react-navigation-stack --save
      npm install react-native-gesture-handler --save
  */
  render() {

    return(
      <View style={ defaultStyle.container }>
        <Text>
          Hola mundo
        </Text>
        <Button></Button>
      </View>
    )
  }

}

class HomeScreen extends Component {

  render() {
    
    const {navigate} = this.props.navigation;

    return (
      <View style={ defaultStyle.container }>
        <Text>
          Pantalla 1
        </Text>
        <Button title="P1" 
                onPress={() => navigate('detalles')}/>
      </View>
    )
  }
}

class DetalleScreen extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={ defaultStyle.container }>
        <Text>
          Pantalla 2
        </Text>
        <Button title="P2" 
                onPress={() => navigate('inicio')}/>
      </View>
    )
  }
}

//Objeto que define el patrón de navegación.
//Es el punto de entrada de la aplicación.
const AppNavigator = createStackNavigator({
    //Identificadores de los componentes a navegar.
    inicio: HomeScreen,
    detalles: DetalleScreen
  },{
    //Pantalla inicial
    initialRouteName: 'inicio'
  }
)

export default createAppContainer(AppNavigator);