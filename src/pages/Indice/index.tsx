import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';




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

   

   return (
      <>
         <IndiceMusica listaHinos={hinos} title={hinario.nome} />
      </>
   );
}

export default Indice;