import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import COLORS from '../const/Colors'


export const Input = ({label,IconName, error, onFocus=()=>{}, ...props}) => {

    return (
        <View style={estilos.formContainer}>
            <Text style={estilos.inputLabel}>{label}</Text>
            
            <View style={[estilos.inputContainer, {borderBottomColor: error ? COLORS.errorRed : COLORS.lightPurlple }]}>
                <TextInput 
                style={estilos.textInput}
                autoCorrect={false}
                onFocus={()=>{onFocus()}}
                {...props}
                keyboardType="web-search"               
                />
            </View>

            <Text style={[estilos.errorMessage]}>{error}</Text>

        </View>
    )
}

const estilos = StyleSheet.create({
    formContainer:{
        marginBottom:2,
    },
    inputLabel:{
        marginVertical:1,
        fontSize:15,
        color:COLORS.blackGreen,
        fontWeight:'bold'
    },
    errorMessage:{
        color:COLORS.error,
        fontSize: 10
        
    },
    inputContainer:{
        height:40,
        backgroundColor:COLORS.ligthGreen,
        flexDirection:'row',
        paddingHorizontal:5,
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'flex-end',
        borderBottomColor:COLORS.black,
        borderRadius: 5
    },
    textInput:{
        color:COLORS.black,
        flex:1,
    },
    

})
