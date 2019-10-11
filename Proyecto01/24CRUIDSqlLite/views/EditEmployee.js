import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';
import styles from '../styles/StyleSheet';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('Coppel.db');
export  default class EditEmployee extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: ''
        }
    }

    findEmployee() {
        const findEmployeeQuery = 'SELECT nombre, apellido, email FROM empleados WHERE email = ?';
        db.transaction((tx) => {
            tx.executeSql(findEmployeeQuery,[this.state.email],(err,res) => {

                    
                if (res.rows._array.length > 0) {
                    const employee = res.rows._array[0];
                    this.setState({
                        nombre:employee.nombre,
                        apellido: employee.apellido,
                        email: employee.email,
                        currentUserEmail: employee.email
                    })
                    
                } else {
                    alert('No existe ese email.');
                }
            })
        })
    }

    updateEmployee() {
        const {nombre, apellido, email} = this.state;
        
        if (!nombre || !apellido || !email)  {
            alert('Faltan datos.');
            return;
        }
        const updateEmployeeQuery = 'UPDATE empleados SET nombre = ?, apellido = ? WHERE email = ?';
        db.transaction((tx) => {
            tx.executeSql(updateEmployeeQuery,[this.state.nombre,this.state.apellido,this.state.email],(err,res) => {
                if (res.rowsAffected > 0) {
                    Alert.alert('Exito', 'Operación exitosa',[
                        {text: 'OK', onPress:() => this.props.navigation.navigate('HomeScreen')}
                    ],
                    { canceleable: false}
                    );
                } else {
                    alert('Ha ocurrido un error.');
                }
            })
        })
    }

    render () {
        return(
            <View style={styles.container}>
                <CCaptura placeholder= {'Email: '}
                onSubmitEditing={this.closeKeyBoard} 
                onChangeText={ (email) => this.setState({email})}
                />
                <CButton texto={"Buscar"}  onPress={() => this.findEmployee()}/>

                <CCaptura placeholder= {'Nombre: '}
                onChangeText={ (nombre) => this.setState({nombre})}
                value={this.state.nombre}/>
                <CCaptura placeholder= {'Apellido: '}
                value={this.state.apellido}
                onChangeText={ (apellido) => this.setState({apellido})}/>
                <CButton texto={"Actualizar Datos"} onPress={() => this.updateEmployee()}/>
            </View>
        )
    }
}