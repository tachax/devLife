import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ImgButton(params) {

    const [quantidade, setQuant] = useState(0);

    const aumentar = (quantidade) => {
        var quantidade = quantidade + 1;
        setQuant(quantidade++)
    }

    return (
        <View style={styles.texto}>
            <Text style={styles.texto}>{quantidade}</Text>
            <TouchableOpacity
                style={styles.box}
                onPress={() => aumentar(quantidade)} >
                {params.titulo == 'coffee' ?
                    <Image
                        style={styles.imagem}
                        source={require('./coffee.png')}
                    />
                    :
                    <Image
                        style={styles.imagem}
                        source={require('./water.png')}
                    />
                }
                {params.titulo == 'coffee' ?
                    <Text  style={styles.texto}>coffee</Text>
                    :
                    <Text  style={styles.texto}>water</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imagem: {
        width: 146,
        height: 128,
    },
    box: {
        textAlign: 'center',
        backgroundColor: '#3e694f',
        borderRadius: 30,
        padding: 6
    },
    texto: {
        fontSize: 22, 
        textAlign: 'center'
    }
});