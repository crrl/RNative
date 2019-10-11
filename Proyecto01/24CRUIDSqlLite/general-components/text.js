import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default CText = props => {
    return(
        <View style={styles.contenedor}>
            <Text style={[styles.texto, props.style]}>
                {props.staticText} {props.APIResponse}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginHorizontal: 35,
        marginTop: 10,
        paddingLeft:15,
        width: '70%'
    },
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
    }
})


