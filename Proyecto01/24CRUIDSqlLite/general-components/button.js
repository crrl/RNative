import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default CButton = props => {
    return(
            <Text style={styles.texto}>
                {props.texto}
            </Text>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: '#111825',
        fontSize: 18,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35
    }
})


