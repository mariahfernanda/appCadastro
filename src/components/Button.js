import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Pressable } from 'react-native'
import COLORS from '../const/Colors'

export const Button = ( { title, onPress= ()=>{} } ) => {

    return (
        <TouchableOpacity style={estilos.button} activeOpacity={0.5} onPress={onPress}>            
            <Text style={estilos.title}>{title}</Text>
        </TouchableOpacity>
    )

}

const estilos = StyleSheet.create({
    button:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:COLORS.darkGreen,
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        alignSelf:'flex-end',
        marginVertical:20,
        elevation: 2 
    },
    title:{
        color:COLORS.white,
        fontWeight:'bold',
        fontSize:14,
    },
})
