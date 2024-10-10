import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from "./componentes/telaInicial";
import TelaIndicacoes from "./componentes/telaIndicacoes";
import TelaSobre from "./componentes/telaSobre";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator headerMode='none'>
        <Drawer.Screen name="Inicio" component={ TelaInicial } />
        <Drawer.Screen name="Indicações" component={ TelaIndicacoes } />
        <Drawer.Screen name="Sobre" component={ TelaSobre } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};