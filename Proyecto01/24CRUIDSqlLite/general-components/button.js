import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CButton = props => {
    return(
        <TouchableOpacity style={styles.boton} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}

export default CButton;
const styles = StyleSheet.create({
    texto: {
        color: '#111825',
        fontSize: 18
    },
    boton: {
        alignItems: 'center',
        backgroundColor: 'orange',
        color: 'navy',
        padding: 10,
        marginTop: 16,
        marginHorizontal: 35
    }
})


