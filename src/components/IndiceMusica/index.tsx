import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, BaseRouter } from '@react-navigation/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';


import styles from './styles';

// Model
import { HinoBean } from '../../models/hinoBean';

interface IndiceMusicaProps {
    listaHinos: HinoBean[];
}

const IndiceMusica: React.FC<IndiceMusicaProps> = ({ listaHinos }) => {
    const { navigate, setParams } = useNavigation();

    const hinos = listaHinos;


   function handleNavigationToMusica(hino: HinoBean) {
      console.log(hino);
      setParams({hino: hino})
      navigate('Musica', {hino: hino})
  }

   return (
      <View style={styles.container}>
          <FlatList
               data={hinos}
               renderItem={({ item }) => 
                  <RectButton onPress={ () => handleNavigationToMusica(item) }>
                     <Text style={styles.textItem}>{item.numero} - {item.titulo}</Text>
                  </RectButton>
               }
               keyExtractor={(item, index) => index.toString()}

            />
      </View>
   );
}

export default IndiceMusica;