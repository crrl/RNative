import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default CCaptura = props => {
    return(
            <View style={styles.contenedor}>
                <TextInput 
                    underlineColorAndroid= "transparent"
                    placeholder= {props.placeholder}
                    placeholderTextColor= '#F3F3F3'
                    keyboardType={props.keyboardType}
                    onChangeText= {props.onChangeText}
                    returnKeyType= {props.returnKeyType}
                    numberOfLines = {props.numberOfLines}
                    multiline = {props.multiline}
                    onSubmitEditing = {props.onSubmitEditing}
                    style={props.style}
                    blurOnSubmit={false}
                    value= {props.value}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginHorizontal: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1
    }
})


