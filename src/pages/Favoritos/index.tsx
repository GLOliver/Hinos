import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favoritos() {
    const { goBack } = useNavigation();

    const obj ={ title: 'Favoritos'}

    function handleNavigateBack() {
        goBack();
    }

    return (
        <>
            <PageHeader obj= {obj} />
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
        </>
    );
}

export default Favoritos;