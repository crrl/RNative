import React, { Component } from 'react';
import { View, Text } from 'react-native';

//Styles
import { elEstilo } from './styles';

export default class Aviso extends Component {

    render() {
        return (
            <View>
                <Text>
                    Curso <Text style={elEstilo.Estilo}>React</Text> Natie
                </Text>
            </View>
        )
    }
}