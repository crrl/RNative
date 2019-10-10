import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default CText = props => {
    return(
        <TouchableOpacity style= {styles.boton} onPress={props.customClick}>
            <Text style={styles.texto}>
                {props.titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        alignItems: 'center',
        backgroundColor: 'orange',
        color: 'navy',
        padding: 10,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35
    },
    texto: {
        color: '#FFF'
    }
})


