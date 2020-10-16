import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, FlatList, RectButton, TextInput } from 'react-native-gesture-handler';

import _ from "lodash";

import AsyncStorage from '@react-native-community/async-storage';


import { Feather } from '@expo/vector-icons';

import styles from './styles';

// Pages
import PageHeader from '../../components/PageHeader';

// Model
import { HinoBean } from '../../models/hinoBean';

interface IndiceMusicaProps {
   listaHinos: HinoBean[];
   title: string;
}

const IndiceMusica: React.FC<IndiceMusicaProps> = ({ listaHinos, title }) => {
   const navigation = useNavigation();

   const [query, setQuery] = useState('');
   const [hinosFull, setFullHinos] = useState(listaHinos);
   const [hinos, setHinos] = useState(listaHinos);

   function handleSearch(text: string) {
      const formatQuery = text.toLowerCase();
      const data = _.filter(hinosFull, user => {
         return contains(user, formatQuery);
      })

      setQuery(formatQuery);
      setHinos(data);
   }

   function contains(hino: HinoBean, query: string) {
      if (hino.numero.includes(query) || hino.titulo.toLowerCase().includes(query)) {
         return true;
      }
      return false;
   }

   function handleNavigationToMusica(hino: HinoBean) {
      setQuery('');
      setHinos(hinosFull)
      loadFavorites();


      navigation.navigate('Musica', { hino: hino, favorited: favorites.includes(hino.numero) });
   }

   const [isFilterVisible, setIsFilterVisible] = useState(true);

   function handleToggleFilterVisible() {
      setIsFilterVisible(!isFilterVisible);
   }

   const [favorites, setFavorites] = useState<string[]>([]);

   async function loadFavorites() {
      await AsyncStorage.getItem('favoritesNCanticos').then(response => {
         if (response) {
            const favoritedHinos = JSON.parse(response);
            console.log(response)

            setFavorites(JSON.parse(response));
         }
      });
   }

   useEffect(() => {
      loadFavorites();
   }, []);

   

   return (
      <>
         <PageHeader
            title={title}
            headerRight={(
               <BorderlessButton onPress={handleToggleFilterVisible}>
                  <Feather name="filter" size={20} color="#FFF" />
               </BorderlessButton>
            )}
         >
            {isFilterVisible && (
               <View style={styles.searchForm}>
                  <Text style={styles.label}>Pesquisar</Text>
                  <TextInput
                     style={styles.input}
                     placeholder="Pesquise por titulo ou numero"
                     placeholderTextColor="#c1bccc"
                     onChangeText={handleSearch}
                  />

               </View>
            )}
         </PageHeader>
         <View style={styles.container}>
            <FlatList
               data={hinos}
               renderItem={({ item }) =>
                  <RectButton onPress={() => handleNavigationToMusica(item)}>
                     <Text style={styles.textItem}>{item.numero} - {item.titulo}</Text>
                  </RectButton>
               }
               keyExtractor={(item, index) => index.toString()}
            />
         </View>
      </>
   );
}

export default IndiceMusica;