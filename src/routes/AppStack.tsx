import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pagina
import Landing from '../pages/Landing';
import Indice from '../pages/Indice';
import Favoritos from '../pages/Favoritos';
import Musica from '../pages/Musica';

const { Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="Indice" component={Indice} />
                <Screen name="Favoritos" component={Favoritos} />
                <Screen name="Musica" component={Musica}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;