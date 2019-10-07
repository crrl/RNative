import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Aviso from './Componentes/Aviso/Index';
import {defaultStyle, estiloAuxiliar, estiloSecundario } from './style-sheet';
import styleObject from './style-object';
/*
  Estilos / Concepto:
    - Similar a las páginas web, React Native usa el concepto de estilos para separar la presentación de la estructura.
    - Los estilos se definen usando JSX.
    - A diferencia de las CSS, no se utilizan guiones medios para comandos compuestos. Se usa la notación camelCase
      p. ej:
        font-size (CSS)
        fontSize  (JSX)

  Estilos > en linea
    - Se aplica la propiedad al style del componente directamente.
    - Son prácticos para pruebas en desarrollo; pero ineficientes porque deben crearse cada vez que la página se renderiza.


  Estilos > por objetos
    - Se definen como entidades generales al módulo.
    - No se regeneran cada renderizado del componente.
    - Pueden ser reutilizables.
    - Los componentes usan un par de llaves y el atributo style para asociarlos ( style={variable} ).

  Estilos > Por Objeto > Definición
    var formato = {
      fontSize: 40,
      color: green
    }
  
  Estilos > Componente StyleSheet
    - Estrategia ampliamente usada por rendimiento y por reutilización.
    - Sintaxis endulzada por las características que aporta ES6.
    - oarticularmente elementos estáticos.
    - Es una manera conveniente para que los estilos estén cargados una sola vez.
  
    export default StyleSheet.create(
      {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }
    )
  
  Estilos > Combinaciones
      - La propiedad style de los componentes permite un arreglo, cuyos elementos pueden ser cualquier tipo de estilo.
      - En caso de ambigüedades el estilo que aplica es el más a la derecha.

  Estilos > Componentes
      - Es una buena práctica definir cada componente en su propia carpeta y agregar los archivos index.js y styles.js para dicho elemento.

*/

export default class Aplicacion extends Component {

  render() {

    return(
      <View style={defaultStyle.container}>
        {/* Estilos en línea */}
        <Text>
          Curso <Text style={{fontSize: 40, color: 'red'}}>React</Text> Native.
        </Text>
        {/* Estilos por objetos */}
        <Text>
          Curso <Text style={styleObject.texto}>React</Text> Native.
        </Text>
        {/* Estilos por styleSheet */}
        <Text>
          Curso <Text style={defaultStyle.formato}>React</Text> Native.
        </Text>
        {/* Estilos combinados */}
        <Text>
          Curso <Text style={[estiloAuxiliar.texto, {color: 'blue'}]}>React</Text> Native.
        </Text>
        {/* Estilos combinados > Ambigüedades > LLamado*/}
        <Text>
          Curso <Text style={[estiloSecundario.texto, {color: 'cyan'}]}>React</Text> Native.
        </Text>

        <Aviso></Aviso>
      </View>
    )
  }
}
