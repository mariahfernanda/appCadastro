import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import COLORS from '../const/Colors'
import { Input } from '../components/Input'
import { InputNumber } from '../components/InputNumber'
import { Button } from '../components/Button'
import hospital from '../assets/hospital.png'
import Api, { api } from '../services/Api'

export const Cadastro = () => {

    const [inputs, setInputs] = React.useState({
        nome_paciente: '',
        telefone_paciente: '',
        celular_paciente: '',
        email_paciente: '',
        nome_resposavel: '',
        telefone_responsavel: '',
    });

    const handlerOnChange = (text, input) => {
        setInputs( (prevState) => (
          {...prevState, [input]:text}   
        ))
    }

    const [errors, setErrors] = React.useState({})

    const handlerErrors = (errorMessage, input) => {
        setErrors( (prevState)=>({...prevState, [input]:errorMessage}) );
    }
    
    const validate = () =>{   
        let validate = true;
    
        if (!inputs.nome_paciente) {
          validate = false;
          handlerErrors('Informe o seu Nome.', 'nome');        
        }
        if (!inputs.telefone_paciente) {
          validate = false;
          handlerErrors('Informe o seu Telefone.', 'telefone');
        }
        if (!inputs.celular_paciente) {
          validate = false;
          handlerErrors('Informe o seu Celular.', 'celular');
        }
        if (!inputs.email_paciente) {
          validate = false;
          handlerErrors('Informe o seu Email.', 'email');
        }
        if(validate){
            console.log('cadastrou')      
        }      
        console.log(errors);      
    }

    const Cadastrar = () => {
        try{
            const Response= api.post('cadastrarPaciente',
            { nome_paciente: inputs.nome_paciente,
              telefone_paciente: inputs.telefone_paciente,
              celular_paciente: inputs.celular_paciente,
              email_paciente: inputs.email_paciente,
              nome_resposavel: inputs.nome_resposavel,
              telefone_responsavel: inputs.telefone_responsavel
            }
            );
        }catch(error){}
    }

    return(
        <SafeAreaView style={styles.safe}>

            <View style={styles.containerText}>
            
                <Text style={styles.textTitle}>HOSPITAL CURAMED </Text>
                <Image source={hospital} style={styles.image}/>
            </View>
            
            <ScrollView style={styles.scroll}>
                <View style={styles.viewForm}>
                    <Input  label="Nome" error={errors.nome}  onFocus={()=>(handlerErrors(null, 'nome_paciente'))}    onChangeText={ (text) => handlerOnChange(text, 'nome_paciente' )  }/>
                    <View style={styles.numbers}>
                    <InputNumber  label="Telefone" error={errors.telefone}     onFocus={()=>(handlerErrors(null, 'telefone_paciente'))}    onChangeText={ (text) => handlerOnChange(text, 'telefone_paciente' )  }/>
                    <InputNumber  label="Celular" error={errors.celular}     onFocus={()=>(handlerErrors(null, 'celular_paciente'))}    onChangeText={ (text) => handlerOnChange(text, 'celular_paciente' )     }/>
                    </View>
                    <Input  label="Email" error={errors.email} onFocus={()=>(handlerErrors(null, 'email_paciente'))}    onChangeText={ (text) => handlerOnChange(text, 'email_paciente' )     }/>
                    <Input  label="Nome Responsável"/>
                    <Input label="Telefone Responsável"/>
                    <Button title="CADASTRAR"  onPress={validate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    safe:{
      flex:1,
      backgroundColor:COLORS.whiteGreen,
    },
    scroll:{
        paddingHorizontal:20,     
    },
    viewForm:{
        marginVertical:20,
        marginBottom:50
    },
    textTitle:{
        paddingLeft:20,
        color:COLORS.blackGreen,
        fontSize:26,
        fontWeight:'bold',        
    },
    containerText:{
        width: '100%',
        height:120,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:COLORS.whiteGreen
    },
    image:{
        height:90,
        width:110,
        justifyContent: 'flex-end' 
    },
    numbers:{
        flexDirection:'row',
        width: '100%',
        justifyContent:'space-between'
    }
  
  })