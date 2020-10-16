import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

import logoImg from '../../assets/images/Hinos_LogoIcon.png';
import { useNavigation, } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {

    const { navigate, goBack } = useNavigation()

    function handleGoBack() {
        //navigate('Landing');
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Ionicons name="ios-arrow-back" resizeMode="contain" size={35} color="white" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode='contain' />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {headerRight}
            </View>
            {children}
        </View>
    );
}

export default PageHeader;