import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import COLORS from '../const/Colors'
import { Input } from '../components/Input'
import { InputNumber } from '../components/InputNumber'
import { Button } from '../components/Button'
import hospital from '../assets/hospital.png'

export const Cadastro = () => {
    
    const [inputs, setIputs] = React.useState({
        nome: '',
        telefone: '',
        celular: '',
        email: '',
        nomeresposavel: '',
        telefoneresponsavel: '',
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
    
        if (!inputs.nome) {
          validate = false;
          handlerErrors('Informe o seu Nome.', 'nome');        
        }
        if (!inputs.telefone) {
          validate = false;
          handlerErrors('Informe o seu Telefone.', 'telefone');
        }
        if (!inputs.celular) {
          validate = false;
          handlerErrors('Informe o seu Celular.', 'celular');
        }
        if (!inputs.email) {
          validate = false;
          handlerErrors('Informe o seu Email.', 'email');
        }
        if(validate){
            console.log('cadastrou ai sim')      
        }      
        console.log(errors);      
    }

    return(
        <SafeAreaView style={styles.safe}>

            <View style={styles.containerText}>
            
                <Text style={styles.textTitle}>HOSPITAL CURAMED</Text>
                <Image source={hospital} style={styles.image}/>
            </View>
            
            <ScrollView style={styles.scroll}>
                <View style={styles.viewForm}>
                    <Input  label="Nome" error={errors.nome}     onFocus={()=>(handlerErrors(null, 'nome'))}    onChangeText={ (text) => handlerOnChange(text, 'nome' )  }/>
                    <View style={styles.numbers}>
                    <InputNumber  label="Telefone" error={errors.telefone}     onFocus={()=>(handlerErrors(null, 'telefone'))}    onChangeText={ (text) => handlerOnChange(text, 'telefone' )  }/>
                    <InputNumber  label="Celular" error={errors.celular}     onFocus={()=>(handlerErrors(null, 'celular'))}    onChangeText={ (text) => handlerOnChange(text, 'celular' )     }/>
                    </View>
                    <Input  label="Email" error={errors.email}     onFocus={()=>(handlerErrors(null, 'email'))}    onChangeText={ (text) => handlerOnChange(text, 'email' )     }/>
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