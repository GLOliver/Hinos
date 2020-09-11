import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import logoImg from '../../assets/images/Hinos_LogoIcon.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const { navigate } = useNavigation()

    function handleGoBack() {
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Ionicons name="ios-arrow-back" resizeMode="contain" size={24} color="white" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode='contain' />
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;