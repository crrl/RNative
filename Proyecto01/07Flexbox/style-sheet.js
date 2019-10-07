import  { StyleSheet } from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    //flex: 1,
    //Dirección de los elementos hijos.
    /*
    flexDirection: 
      row: Horizontal.
      column: Vertical (Defecto)
    */
    flexDirection: 'row',


    // Alineación de los hijos.
    /* 
      justifyContent: 
        flex-start: Inicio
        flex-end: Final
        center: Centro
        space-around: Distribución equitativa sobre el viewport
        space-between: Distribución equitativa sobre el viewport a partir del segundo elemento 
    */
    justifyContent: 'space-around',


    //Alineación vertical
    /*
    
    */
    alignItems: 'center',
    height: '100%'
  },
  formato: {
    fontSize: 40,
    color: 'yellow'
  },
  cuadro: {
    width: 100,
    height: 100
  },
  cuadro1: {
    backgroundColor: 'red',
  },
  cuadro2: {
    backgroundColor: 'green'
  },
  cuadro3: {
    backgroundColor: 'orange'
  }
})

const estiloAuxiliar = StyleSheet.create({
  texto: {
    fontSize:40
  }
});

const estiloSecundario = StyleSheet.create({
  texto: {
    color: 'red',
    fontSize: 40
  }
});

export {
  defaultStyle,
  estiloAuxiliar,
  estiloSecundario
}