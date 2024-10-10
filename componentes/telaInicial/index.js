import React from "react";
import { Text, View, Image } from "react-native";
import estilos from "./estilo";

import Fotoinicial from '../../assets/barcafehp.png';


export default function TelaInicial() {
    return(
        <View style= { estilos.container }>
            <Text style= { estilos.texto }>Tela Inicial Café</Text>
            <Image source={ Fotoinicial } />
        </View>
    )
}