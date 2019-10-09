import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { defaultStyle } from './style-sheet';

export default class ComponenteHTTP extends Component {
    state = {
        datos: ''
    }
    componentDidMount() {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'get'
            })
            .then((res) => res.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    datos: responseJson
                })
            })
            .catch((err) => {
                this.setState({
                    datos: 'Error: ' + err
                })
            });
        } catch {}
    }
    render() {
        return (
            <View style={defaultStyle.container}>
                <Text>
                    {this.state.datos.title}
                </Text>
            </View>
        )
    }
}