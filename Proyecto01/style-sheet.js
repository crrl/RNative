import  { StyleSheet } from 'react-native';

const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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