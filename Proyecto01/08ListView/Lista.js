import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Estilos
import listStyle from './ListaStyle';

export default class Lista extends Component {

    state = {
        currentAlumno: {
            nombre: '',
            apellido: '',
            id: null
        },
        alumnos: [{
            nombre: 'Christian René',
            apellido: 'Rocha León',
            id:1
        },{
            nombre: 'René',
            apellido: 'Rocha León',
            id:2
        },{
            nombre: 'René',
            apellido: 'León',
            id:3
        },{
            nombre: 'Christian',
            apellido: 'Rocha',
            id:4
        },{
            nombre: 'René',
            apellido: 'Rocha',
            id:5
        }]
    }
    mostrarAlumno = (id) => {
        this.setState({currentAlumno: this.state.alumnos[id]});
    }
    render() {
        return (
            <View>
                {
                    this.state.alumnos.map((element, index) => {
                        return(
                            <TouchableOpacity key={element.id} style= {listStyle.container} 
                                              onPress= {() => this.mostrarAlumno(index)}>
                                <Text>
                                    {element.nombre} {element.apellido}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
                <View style= {listStyle.seleccionado}>
                    <Text>
                        {this.state.currentAlumno.nombre}
                    </Text>
                    <Text>
                        {this.state.currentAlumno.apellido}
                    </Text>
                    <Text>
                        {this.state.currentAlumno.id}
                    </Text>
                </View>
            </View>
        )
    }
}