import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/StyleSheet';
import CButton from '../general-components/button';
import CCaptura from '../general-components/capture';
import CText from '../general-components/text';
export  default class HomeScreen extends Component {
    render () {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    asdasdas
                </Text>
            </View>
        )
    }
}