import React, { useEffect, useState } from 'react';
import { StyleSheet,ScrollView, TouchableOpacity, View,Text } from 'react-native';
import { api } from '../services/Api';

export const Listagem = () => { 

    const [pacientes, setPacientes] = useState([])

    useEffect(
        ()=>{
            apiSymbiaAgendamento.get('/listarPacientes').then(
                (data)=>{
                    console.log(data.data);
                    setPacientes(data.data)
                }
            ).catch()
        },[]
    );

    return(
        <ScrollView>
            <View style={style.containerListagemPaciente}>
                {
                    pacientes.map(
                        paciente=>(
                            <TouchableOpacity style={style.buttonPaciente}>
                                <View>
                                    <Text>{paciente.name_paciente}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    containerListagemPaciente:{
        backgroundColor:"#000000"
    },

    buttonPaciente:{
        backgroundColor: "#7D6483"
    }
})

