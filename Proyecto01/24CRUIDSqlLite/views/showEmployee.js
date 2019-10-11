import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';
import styles from '../styles/StyleSheet';
import * as SQLite from 'expo-sqlite';


export  default class ShowEmployee extends Component {

    render () {
        return(
            <View style={styles.container}>
                <CCaptura placeholder= {'Email: '}/>
                <CButton texto={"Buscar"} />

                <CText staticText="Nombre: " />
                <CText staticText="Apellido: " />
                <CText staticText="Email: " />
            </View>
        )
    }
}