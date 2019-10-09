import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { defaultStyle } from './style-sheet';

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

    //Devolver un objeto.
    const getObjeto = () => ({
      nombre: 'Luis',
      puesto: 'Programador'
    })
    
    // this.setState({
    //   valor: getValor()
    // });

    this.setState({ valor: getObjeto().puesto });
  }

  usoParametrosXDefecto() {
    //En caso de no recibir el parametro, setea empresa a Coppel por defecto.
    const muestraEmpresa = (empresa = 'Coppel') => {
      this.setState({
        valor: empresa
      })
    }

    muestraEmpresa('DCInternet');
  }

  /*
    Destructuring
      - Sintaxis endulzaba para acceder a los elementos asociados y evitar la sintaxis tradicional de punto.
      - un objeto compuesto se puede "descomponer" en piezas.
  */
  usoDescomposicionObjetos() {
    laptop = {
      marca: 'HP',
      color: 'rojo',
      pantalla: {
        dimension: '15 pulgadas'
      }
    }
      //Sintaxis tradicional
    this.setState({
      valor: laptop.pantalla.dimension
    })

    //Sintaxis destructuring
    const { marca, pantalla } = laptop;
    this.setState({
      valor: `ES6 ${pantalla.dimension}`
    })
  }

  /*
    Untado de objetos(Spread)
      - Permite definir la estructura de objeto a partir de otro objeto.
      - Las características dede el nuevo objeto son accesibles directamente.
      - Se utiliza el operador ... para hacer la relación.
  */
  usoUntadoObjetos() {
    const laEmpresa = {
      nombre: 'Coppel',
      sede: 'Culiacán'
    }

    const elAutomovil = {
      ...laEmpresa,
      noPlacas: '123ABC'
    }

    elAutomovil.nombre = 'hola';
    this.setState({
      valor: `El automovil pertenece a: ${elAutomovil.nombre}`
    })
  }

  usoCadenasLiterales () {
    const aviso = (nombre, sede, noParticipanes) => {
      this.setState({
        //valor: "Curso " + nombre + "\r\nSede: " + sede + "\r\nParticipantes: " + noParticipanes;
        valor: 
        `Curso: ${nombre}
Sede: ${sede}
Participantes: ${noParticipanes}`
      })
    }
    aviso('React Native', 'Culiacán', 20);
  }

  /*
    Getters y Setters (POO)
      - Asociación directamente a los metodos de acceso de un objeto.
      - Elementos claves: set, get y _ para la calificaciñon del campo.
        Nota:
        El uso del _ es debido a que  cuando hacemos un getter o un setter, se manda a llamar
        el getter o setter del mismo, lo que ocasionaría un bucle sin fin de llamadas al mismo.
  */
 usoPOOGetterSetter() {
   class Curso {
     constructor(nombre, duracion) {
       this.duracion = duracion;
       this.nombre = nombre;
     }

     getDuracion() {
       return this.duracion;
     }

     setDuracion(duracion) {
       this.duracion = duracion;
     }

     get nombre() {
       return this._nombre;
     }

     set nombre(nombre) {
       this._nombre = nombre;
     }
   }
   let curso = new Curso('React Native', 30);
   
   this.setState({
     valor: `Duración: ${curso.getDuracion()}
Nombre: ${curso.nombre}`
   })
 }

 /*
  Elementos estáticos:
    - Se pueden definir elementos generales a los objetos de una clase.
    - Se utiliza el operador static en la definición del elemento.
    - React utiliza este concepto en el método StyleSheet.create();
 */
 usoPOOElementosEstaticos() {
   class Salon {
     constructor(empresa) {
      this.empresa = empresa;
     }

     getEmpresa() {
       return this.empresa;
     }
   }
   
   let salon = new Salon('Coppel');
   this.setState({
     valor: `Empresa: ${salon.getEmpresa()}` 
   })
 }


 /*
 POO > Herencia
  - Capacidad de definir una clase (objeto) a partir de una clase base.
  - ES6 Utiliza el operador extends para definir la herencia.
*/
  usoPOOHerencia()  {
    class Persona {
      constructor (nombre) {
        this.nombre = nombre;
      }

      get nombre() {
        return this._nombre;
      }
      
      set nombre(nombre) {
        this._nombre = nombre;
      }
    }

    class Empleado extends Persona {
      constructor(nombre, puesto) {
        super(nombre);
        this.puesto = puesto;
      }
      get puesto() {
        return this._puesto;
      }
      
      set puesto(puesto) {
        this._puesto = puesto;
      }
    }

    let empleado = new Empleado('Christian', 'Developer');
    this.setState({
      valor: `El empleado es ${empleado.nombre} y su puesto es ${empleado.puesto}`
    })
  }

  /*
    Polimorfismo:
      - Implementado a partir del concepto de sobre escritura o jerarquñia de objetos.
      - Los objetos tienen el mismo mñetodo pero lo implementan de manera diferente.
      - Se crea una clase base que es antecesor común de todos los objetos. (Interfaz)
  */
  usoPOOPolimorfismo() {
    class Cuenta {

      constructor() {}

      depositar() {
        return 'Depósito en una cuenta';
      };
    }

    class CuentaAhorro extends Cuenta {
      constructor() {
        super()
      }

      depositar() {
        return super.depositar() + " de ahorro.";
      }
    }

    class CuentaCheques extends Cuenta {
      constructor() {
        super()
      }

      depositar() {
        return super.depositar() + " de cheques.";
      }
    }

    const manejoCuenta = (cuenta) => this.setState({valor: cuenta.depositar()})

    manejoCuenta(new CuentaAhorro());
    manejoCuenta(new CuentaCheques());
  }

  /*
    Promesas:
      - Objeto que permite hacer peticiones asíncronas y evitar los callbacks anidados.
      - Antes de la implementación propia de ES6, se requerían librerías de terceros cómo JQuery;
        por lo que se cargaba en el DOM de más elementos.
       Sintaxis
        - 
  */
  usoPromesas() {
    const solicitaCredito = (historial) => {
      return new Promise((accept ,reject) => {

        
        if (historial) {
          accept(`El historial fué aceptado.`);
        } else {
          reject(`El historial fué rechazado.`);
        }
      })
    };
    solicitaCredito(true)
    .then((res) => {
      this.setState({
        valor: res
      })
    })
    .catch((err) => {
      this.setState({
        valor: err
      })
    })
  }


  componentDidMount() {
    // this.usoAlcances();
    // this.usoOperadorflecha();
    // this.usoElementosImplicitos();
    // this.usoParametrosXDefecto();
    // this.usoDescomposicionObjetos();
    // this.usoUntadoObjetos();
    // this.usoCadenasLiterales();
    // this.usoPOOGetterSetter();
    // this.usoPOOElementosEstaticos();
    // this.usoPOOHerencia();
    // this.usoPOOPolimorfismo();
    this.usoPromesas();
  }

  render() {

    return(
      <View style={defaultStyle.container}>
        <Text style={{fontSize: 20}}>{this.state.valor}</Text>
      </View>
    )
  }
}
