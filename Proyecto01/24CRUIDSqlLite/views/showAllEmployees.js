import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';
import styles from '../styles/StyleSheet';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Coppel.db');
export  default class ShowAllEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flatListItem: []
        };
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM empleados',[],(tx1, results) => {
                let temp = [];
                results.rows._array.forEach(element => {
                    temp.push(element);               
                });
                this.setState({flatListItem: temp})
            })
        })
    }

    render () {
        return(
            <View>
                <FlatList
                    data={this.state.flatListItem}
                    keyExtractor={(item, index)=> index.toString()} 
                    renderItem={({item}) => (
                        <View style={localStyles.listContainer}>
                        <CText style={localStyles.id} staticText={"ID: "} APIResponse={item.id} />
                        <CText  staticText={"Nombre: "} APIResponse={item.nombre} />
                        <CText  staticText={"Apellido: "} APIResponse={item.apellido} />
                        <CText  staticText={"email: "} APIResponse={item.email} />
                        </View>
                    )} />

            </View>
        )
    }
}

const localStyles = StyleSheet.create({
    listContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical:15,
        borderWidth: 2,
        marginTop: 3,
        borderColor: '#A3A3A3',
        width: '90%'
    },
    id: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});