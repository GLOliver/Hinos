import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';


// Model
import { HinoBean } from '../../models/hinoBean';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { BorderlessButton } from 'react-native-gesture-handler';

/* type Props = {
   navigation: NavigationStackProp<{ hino: HinoBean }>;
}; */

interface NavigationParams {
   hino: HinoBean;
   favorited: boolean;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


interface Props {
   navigation: Navigation;
   hino: HinoBean;
   favorited: boolean;
}

interface State {
   fontSize: number;
   lineHeight: number;
   isFavorited: boolean;
   footer: boolean;
}

class Musica extends Component<Props, State, NavigationParams>  {
   public static navigationOptions = ({
      navigation,
   }: {
      navigation: Navigation;
   }) => ({
      hino: navigation.state.params ? navigation.state.params.hino : '',
      favorited: navigation.state.params ? navigation.state.params.favorited : false,
   });

   constructor(props: Props) {
      super(props);
      this.state = {
         fontSize: 16,
         lineHeight: 27,
         isFavorited: this.props.route.params.favorited,
         footer: false,
      };

      this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
   }

   async handleToggleFavorite(favorited: boolean) {

      let favoritesArray = [];
      const favorites = await AsyncStorage.getItem('favorites');

      if (favorites) {
         favoritesArray = JSON.parse(favorites);
      }

      if (favorited) {
         const favoritedNum = favoritesArray.findIndex((hinoItem: HinoBean) => {
            return hinoItem.numero === this.props.route.params.hino.numero;
         });

         favoritesArray.splice(favoritedNum, 1)

         this.setState({ isFavorited: false })

      } else {
         favoritesArray.push(this.props.route.params.hino.numero);

         this.setState({ isFavorited: true })
      }
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
   }

   render() {

      const hino = this.props.route.params.hino;
      const favorited = this.props.route.params.favorited;



      return (
         <>
            <PageHeader title={hino.numero + ' - ' + hino.titulo} headerRight={(
               <BorderlessButton onPress={
                  async () => {

                     let favoritesArray = [];
                     const favorites = await AsyncStorage.getItem('favoritesNCanticos');
 
                     if (favorites) {
                        favoritesArray = JSON.parse(favorites);
                     }

                     if (this.state.isFavorited) {
                        
                        const favoritedNum = favoritesArray.findIndex( (numHino: string) => {
                           return numHino === hino.numero;
                        });

                        favoritesArray.splice(favoritedNum, 1)
                        console.log(favoritesArray)
                        this.setState({ isFavorited: false })

                     } else {
                        favoritesArray.push(hino.numero);
                        console.log(favoritesArray)
                        this.setState({ isFavorited: true })
                     }
                     await AsyncStorage.setItem('favoritesNCanticos', JSON.stringify(favoritesArray));

                  }
               }>
                  { this.state.isFavorited
                     ? <Ionicons name="md-heart-dislike" size={30} color="#FFF" />
                     : <Ionicons name="md-heart" size={30} color="#FFF" />
                  }
               </BorderlessButton>
            )}
            />

            <View style={styles.containerMestre}>
               <ScrollView style={styles.scroll}>
                  <View style={styles.container}>
                     <Text style={[{ fontSize: this.state.fontSize, lineHeight: this.state.lineHeight }, styles.letra]}>{hino.letra}</Text>

                  </View>
               </ScrollView>

               <View style={styles.footer}>
                  <View style={styles.footerButton}>
                     <RectButton style={styles.fontButton} onPress={() => {
                        this.setState({ footer: !this.state.footer })
                     }} >
                        {this.state.footer
                           ? <Ionicons name="ios-arrow-down" size={30} color="#FFF" />
                           : <Ionicons name="ios-arrow-up" size={30} color="#FFF" />
                        }
                     </RectButton>
                  </View>
                  {this.state.footer && (
                     <>
                        <View style={styles.footerHead}>
                           <Text style={styles.footerTitle}>Informações</Text>

                           <View style={styles.footerContainerButton}>
                              <RectButton style={styles.fontButton} onPress={() => {
                                 if (this.state.fontSize < 28) {
                                    this.setState({ fontSize: this.state.fontSize + 4 })
                                    this.setState({ lineHeight: this.state.lineHeight + 10 })
                                 }
                              }}
                              >
                                 <MaterialCommunityIcons name="format-font-size-increase" size={30} color="white" />
                              </RectButton>
                              <RectButton style={styles.fontButton} onPress={() => {
                                 if (this.state.fontSize > 16) {
                                    this.setState({ fontSize: this.state.fontSize - 4 })
                                    this.setState({ lineHeight: this.state.lineHeight - 10 })
                                 }
                              }}
                              >
                                 <MaterialCommunityIcons name="format-font-size-decrease" size={30} color="white" />
                              </RectButton>
                           </View>

                        </View>

                        <View style={styles.footerContent}>
                           <Text style={styles.footerContentText}>
                              Assunto: {'  '}
                              <Text style={styles.footerContentTextBold}>
                                 {hino.assunto}
                              </Text>
                           </Text>

                           <Text style={styles.footerContentText}>
                              Letra: {'  '}
                              <Text style={styles.footerContentTextBold}>
                                 {hino.autor_letra}
                              </Text>
                           </Text>

                           <Text style={styles.footerContentText}>
                              Musica: {'  '}
                              <Text style={styles.footerContentTextBold}>
                                 {hino.autor_musica}
                              </Text>
                           </Text>

                        </View>
                     </>
                  )}
               </View>
            </View>
         </>
      );
   }
}

export default Musica;