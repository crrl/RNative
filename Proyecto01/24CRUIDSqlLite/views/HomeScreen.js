import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';

import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('Coppel.db');

export  default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT name FROM sqlite_master WHERE name = 'empleados'",
                [],
                (tx1, res) => {
                    if(res.rows.length == 0) {
                        tx.executeSql(`CREATE TABLE IF NOT EXISTS empleados(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre char(75), apellido char(75), email char(100))`,[]);
                    }
                }
            )
        });
    }
    render () {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <CButton 
                texto={"Registra"}
                onPress={() => navigate('InsertEmployee')}
                />
                <CButton 
                texto={"Actualiza"}
                onPress={() => navigate('EditEmployee') }
                />
                <CButton 
                texto={"Elimina"}
                onPress={() => navigate('DeleteEmployee') }
                />
                <CButton 
                texto={"Consulta por Identificador"}
                onPress={() => navigate('ShowEmployee') }
                />
                <CButton 
                texto={"Consulta General"}
                onPress={() => navigate('showAllEmployees') }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    texto: {

    }
})