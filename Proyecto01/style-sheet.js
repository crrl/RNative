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
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20
  },
  subTitulo: {
    textAlign: 'center',
    alignItems: 'center',
    opacity: 0.7,
    fontSize: 20,
    marginBottom: 30  
  },
  boton: {
    backgroundColor: '#0F00FF',
    padding: 10,
    borderRadius: 10
  }, 
  textoBoton: {
    color: 'white'
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