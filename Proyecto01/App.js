import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { defaultStyle } from './style-sheet';
/*

*/

export default class Aplicacion extends Component {

  state = {
    valor: '1 2 3'
  }

  usoAlcances() {
    
    /* 
      ES6 > Alcances variables
      var Alcance local
      let Alcance de bloque
      const Igual a let pero de valor constante.
        En caso de la constante, si este almacena un objeto, las propiedades pueden cambiar
        (al igual de que se pueden agregar propiedades nuevas).
    */

    
    if (true) {
      var alcanceGlobal = 'A B C';

      let alcanceBloque = '3 4 5';
          alcanceBloque = '6 7 8';

      const alcanceConstante = 'A B C';

      this.setState({valor: alcanceGlobal});
      this.setState({valor: alcanceBloque});
      this.setState({valor: alcanceConstante});
    }


  }
sumar(x, y) {
  this.setState({
    valor: (x + y)
  })
}

usoOperadorflecha() {
  const multiplicar = (x, y) => {
    this.setState({
      valor: (x * y)
    })
  }

  const convierteAMayusculas = valor => {
    this.setState({
      valor: valor.toUpperCase()
    });
  }

  this.sumar(10, 20);
  multiplicar(10, 20);
  convierteAMayusculas('COPPEL');
}

  usoElementosImplicitos() {
    /*
      Sintaxis endulzada para evitar el uso de llaves y del bloque, así como la clausula "return"
    */
    //Devolver un valor.
    const getValor = () => 'Curso React Native';
    this.setState({
      valor: getValor()
    });
  }

  componentDidMount() {
    // this.usoAlcances();
    // this.usoOperadorflecha();
    this.usoElementosImplicitos();
  }
  render() {

    return(
      <View style={defaultStyle.container}>
        <Text style={{fontSize: 60}}>{this.state.valor}</Text>
      </View>
    )
  }
}
