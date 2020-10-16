import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

// Imagens
import landingImg from '../../assets/images/Hinos_Banner.png';
import favoriteImg from '../../assets/images/icons/heart-outline.png';
import bookImg from '../../assets/images/icons/study.png';

// Hinários
import novoCantico from '../../assets/hinarios/Novo_Cantico.json';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigationToIndices() {
        navigate('Indice');
    }

    function handleNavigationToFavoritos() {
        navigate('Favoritos');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem vindo ao seu hinário digital! {'\n'}
                <Text style={styles.titleBold}>
                    Selecione...
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToIndices} style={styles.button}>
                    <Ionicons name="ios-book" size={24} color="white" />
                    <Text style={styles.buttonText}>Novo Cantico</Text>
                </RectButton>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToFavoritos} style={styles.button}>
                    <Ionicons name="ios-heart" size={22} color="white" />
                    <Text style={styles.buttonText}>Favoritos</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Landing;