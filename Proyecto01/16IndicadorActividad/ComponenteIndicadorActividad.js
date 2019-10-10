import React, { Component } from 'react';
import { View,
   Text,
   ActivityIndicator
  } from 'react-native';
import { style16 as styles } from './style-sheet';


export default class ComponenteIndicadorActividad extends Component {

  state = {
    animacion: true
  }

  cerrarIndicadorActividad = () => {
    setTimeout(() => {
      this.setState({animacion: false})
    },6000);
  };
  
  componentDidMount() {
    this.cerrarIndicadorActividad();
  }
  
  render () {

    return (
      <View style={styles.container}>
        <ActivityIndicator 
            animating = { this.state.animacion }
            style = {styles.indicadorActividad }
            color = '#BC2578'
            size  = 'large'
        />
      </View>
    )
  }
}
