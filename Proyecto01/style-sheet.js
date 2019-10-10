import  { StyleSheet, Dimensions } from 'react-native';
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

const style15 = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    padding: 3,
    borderColor: 'navy',
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 200,
    justifyContent: 'center'
  },
  interior: {
    width: '100%',
    height: 30,
    borderRadius: 15,
    backgroundColor: 'green',
  },
  etiqueta: {
    width:'100%',
    fontSize: 23,
    position: 'absolute',
    textAlign: 'center',
    zIndex: 2
  }
})


const style16 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  indicadorActividad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:80
  }
});


const style18 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    width: Dimensions.get('window').width
 },
 textInput: {
    margin: 10,
    height: 100,
    width: 200,
    borderWidth: 3,
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center'
 }
});

export {
  defaultStyle,
  estiloAuxiliar,
  estiloSecundario,
  style15,
  style16,
  style18
}