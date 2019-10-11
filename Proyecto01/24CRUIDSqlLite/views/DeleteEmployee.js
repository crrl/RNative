import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';
import styles from '../styles/StyleSheet';
export  default class DeleteEmployees extends Component {
    render () {
        return(
            <View style={styles.container}>
                <CCaptura placeholder= {'Email: '}/>
                <CButton texto={"Eliminar"} />
            </View>
        )
    }
}