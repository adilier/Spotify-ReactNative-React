import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Buscar from './pages/Buscar';
import Biblioteca from './pages/Biblioteca';

IconFoundation.loadFont();
IconAntDesign.loadFont();
IconMaterialIcons.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: 'Início',
        tabBarIcon: ({ focused }) => (
          <IconFoundation name="home" size={25} style={{marginBottom: 5}}color={focused ? '#fff' : '#B3B3B3'} />
        ),
      }),
    },
    Buscar: {
      screen: Buscar,
      navigationOptions: () => ({
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ focused }) => (
          <IconAntDesign name="search1" size={25} color={focused ? '#fff' : '#B3B3B3'} />
        ),
      }),
    },
    Biblioteca: {
      screen: Biblioteca,
      navigationOptions: () => ({
        tabBarLabel: 'Sua Biblioteca',
        tabBarIcon: ({ focused }) => (
          <IconMaterialIcons name="music-note" size={25} color={focused ? '#fff' : '#B3B3B3'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#282828',
      paddingLeft: 20,
      paddingRight: 20
    },
  },
);

export default createAppContainer(mainNavigation);