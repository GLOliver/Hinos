import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

// Model
import { HinoBean } from '../../models/hinoBean';

function Musica() {


   return (
      <>
         <PageHeader title="Novo Cantico" />
      </>
   );
}

export default Musica;