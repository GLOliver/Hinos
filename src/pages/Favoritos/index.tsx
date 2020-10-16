import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import backgroundImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import IndiceMusica from '../../components/IndiceMusica';


// Model
import { HinoBean } from '../../models/hinoBean';


// Hinario
import novoCantico from '../../assets/hinarios/Novo_Cantico.json';

function Favoritos() {
    const { goBack } = useNavigation();

    const [favorites, setFavorites] = useState<string[]>([]);
    const [hasFavorites, setHasFavorites] = useState(false);
    const [hivosFav, setHinosFav] = useState<HinoBean[]>([]);

    const hinario = novoCantico;
    const hinos = hinario.hinos;

    useEffect(() => {
        loadFavorites();

        


        console.log('favorites')
        console.log(favorites)
    }, []);

    async function loadFavorites() {
        await AsyncStorage.getItem('favoritesNCanticos').then(response => {
            if (response) {
                console.log('response')
                console.log(response)
                Promise.resolve(JSON.parse(response)).then((res) => {
                    console.log('response JSON')
                    console.log(res)
                    setFavorites(res);

                    const hinosSelec = hinos.filter((hino: HinoBean) => {
                        if (res.includes(hino.numero)) {
                            return hino;
                        }
                    })
                    if (hinosSelec.length !== 0) {
                        setHinosFav(hinosSelec);
                        setHasFavorites(true);
                    }
                });
            }
        });
    }

    function handleNavigateBack() {
        goBack();
    }

    return (
        <>
            { hasFavorites
                ? <IndiceMusica listaHinos={hivosFav} title="Favoritos" />
                :
                <View style={styles.container}>
                    <ImageBackground
                        resizeMode="contain"
                        source={backgroundImg}
                        style={styles.content}
                    >

                        <Text style={styles.title}>Você ainda não possui favoritos</Text>
                        <Text style={styles.description}>Marque um hino como favorito e ele aparecerá nessa pagina</Text>
                    </ImageBackground>

                    <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                        <Text style={styles.okButtonText}>Tudo bem</Text>
                    </RectButton>
                </View>
            }
        </>
    );
}

export default Favoritos;