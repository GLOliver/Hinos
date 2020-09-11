import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';

import styles from './styles';

// Pages
import PageHeader from '../../components/PageHeader';

// Hinario
import novoCantico from '../../assets/hinarios/Novo_Cantico.json';
import IndiceMusica from '../../components/IndiceMusica';

function Indice() {
   const { navigate } = useNavigation();

   const hinario = novoCantico;

   const hinos = hinario.hinos;

   function handleNavigationToMusica(hino: any) {
      console.log(hino);
  }

   return (
      <>
         <PageHeader title="Novo Cantico" />
         <IndiceMusica listaHinos={hinos}/>
      </>
   );
}

export default Indice;