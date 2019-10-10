https://www.tutorialspoint.com/react_native/react_native_asyncstorage.htm

import React, { Component } from 'react';
import { View,
         Text,
         AsyncStorage,
         TextInput
  } from 'react-native';
import { style18 as styles } from './style-sheet';


export default class ComponenteAlmacenamientoAsincrono extends Component {

    state = {
        'name': ''
     }
     componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
     
     setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
     }

  render () {

    return (
        <View style = {styles.container}>
            <TextInput style = {styles.textInput} autoCapitalize = 'none'
            onChangeText = {this.setName}/>
            <Text>
            {this.state.name}
            </Text>
        </View>
    )
  }
}
