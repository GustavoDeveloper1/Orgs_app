import React from 'react'

import { Image, View, StyleSheet, Dimensions, Text, Button, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


import Foto from '../../assets/topo.png';
import Logo from '../../assets/logo.png'
import Texto from './Texto';

import AppLoading from 'expo-app-loading';

const width = Dimensions.get('screen').width;


export default function Cesta() {

    const [fontCarregada] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold
    });

    if (!fontCarregada) {
        return (
            <AppLoading />
        )
    }

    return (

        < >
            <Image source={Foto} style={styles.topo}></Image>
            <Text style={styles.titulo}>Detalhes da Cesta</Text>

            <View style={styles.cesta} >
                <Text style={styles.nome}>Cesta de Verduras</Text>
                <View style={styles.containerFazenda}>
                    <Image source={Logo} style={styles.imageFazenda} />
                    <Text style={styles.nomeFazenda} >Jenny Jack Farm</Text>
                </View>
                <Texto style={styles.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto pra cozinha.</Texto>
                <View>
                    <Text style={styles.preco}> R$ 40,00</Text>
                    <Button 
                        style={styles.button}
                        title="Press me"
                        color="#2a9f85"
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({

    topo: {
        width: '100%',
        height: 578 / 768 * width

    },
    titulo: {
        position: 'absolute',
        width: '100%',
        marginTop: 10,
        padding: 16,
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#fff'
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    containerFazenda: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        fontFamily: 'MontserratBold'
    },
    imageFazenda: {
        width: 32,
        height: 32,
        marginRight: 15

    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'MontserratRegular'
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    button:{
        width: 50
    }


})

