import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { defaultStyle } from './style-sheet';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

/*
  Navigation tabs
  - instalación de las siguiente dependencias
    npm install react-native-reanimated@1.2.0 --save
    npm install react-navigation-tabs@1.2.0 --save
*/

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

const TabScreen = createMaterialTopTabNavigator({
  inicio: {screen: HomeScreen},
  detalles: {screen: DetalleScreen}
},{
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFF',
    inactiveTintColor: '#F8F8F8',
    style: {
      backgroundColor: 'orange'
    },
    labelStyle: {
      textAlign: 'center'
    },
    indicatorStyle: {
      borderBottomColor: 'navy',
      boderBottomWidth: 2
    }
  }
})

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689'
      },
      headerTinyColor: '#FFF',
      title: 'Ejemplo de Tabs'
    }
  }
})

export default createAppContainer(App);