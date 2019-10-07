import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Aplicacion extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Curso de React Native 1.0
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)