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
        flex-start
        flex-end
        center
    */
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: '100%'
  },
  formato: {
    fontSize: 40,
    color: 'yellow'
  },
  cuadro1: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  cuadro2: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  cuadro3: {
    width: 100,
    height: 100,
    backgroundColor: 'orange'
  },
  cuadro4: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
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