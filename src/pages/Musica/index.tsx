import React, { Component } from 'react';
import { View } from 'react-native';

import { NavigationScreenProp, NavigationState } from 'react-navigation';

import styles from './styles';
import PageHeader from '../../components/PageHeader';


// Model
import { HinoBean } from '../../models/hinoBean';

/* type Props = {
   navigation: NavigationStackProp<{ hino: HinoBean }>;
}; */

interface NavigationParams {
   hino: HinoBean;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


interface Props {
   navigation: Navigation;
}


class Musica extends Component<Props, NavigationParams>  {
   public static navigationOptions = ({
      navigation,
   }: {
      navigation: Navigation;
   }) => ({
      hino: navigation.state.params ? navigation.state.params.hino : '',
   });

   
   render() {

      const hino = this.props.route.params.hino;
      console.log(hino)
      return (
         <>
            <PageHeader title={hino.titulo} />

         </>
      );
   }
}

export default Musica;