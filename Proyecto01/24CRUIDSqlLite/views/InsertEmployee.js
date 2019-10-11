import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as SQLite from 'expo-sqlite'

import CButton from '../general-components/button'
import CCaptura from '../general-components/capture'
import CText from '../general-components/text'

import styles from '../styles/StyleSheet'

var db = SQLite.openDatabase('Coppel.db');
export  default class InsertEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: ''
        }
    }

    registraEmpleado = () => {
        const { nombre, apellido, email } = this.state;
        
        if (nombre && apellido && email) {
            db.transaction(function(tx) {
                tx.executeSql(
                    "INSERT INTO empleados (nombre, apellido, email) VALUES (?, ?, ?)",
                    [nombre, apellido, email],
                    function(tx, res) {
                        if (res.rows.length == 0) {
                            alert('El empleado ha sido registrado.');
                        } else {
                            alert('Algo salió mal.');
                        }
                    }
                )
            });
        } else if (!nombre) {
            alert('Indica el nombre.')
        } else if (!apellido) {
            alert('Indica el apellido.')
        } else if (!email) {
            alert('Indica el email.')
        }
    }

    
    render () {
        return(
            <View style={styles.container}>
                <CCaptura 
                onSubmitEditing={this.closeKeyBoard} 
                placeholder= {'Nombre: '} 
                onChangeText={ (nombre) => this.setState({nombre})}
                value={this.state.nombre}/>
                <CCaptura onSubmitEditing={this.closeKeyBoard} placeholder= {'Apellido: '} onChangeText={ (apellido) => this.setState({apellido})}
                value={this.state.apellido}/>
                <CCaptura onSubmitEditing={this.closeKeyBoard} placeholder= {'Email: '} onChangeText={ (email) => this.setState({email})}
                value={this.state.email}/>
                <CButton texto={"Guarda Empleado"} onPress={() => this.registraEmpleado() }/>
            </View>
        )
    }
}