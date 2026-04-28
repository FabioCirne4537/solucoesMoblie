import {View, Text, Button, TextInput} from 'react-native'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExemploAsyncStorage(){

    const [nome, setNome] = useState('')

    const SalvarNome = async () => {
        try {
            await AsyncStorage.setItem('@nomePessoa', nome);
            alert('nome salvo!')
            setNome('')
        } catch (e) {
            console.log(e)
        }
    };

    const MostrarNome = async () => {
        try {
            const value = await AsyncStorage.getItem('@nomePessoa');
            if (value !== null) {
            setNomeSalvo(value)
            }
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        MostrarNome();
    }, [])

    return(
        <View>
            <TextInput
            placeholder= 'nome'
            value= {nome}
            onChangeText= {setNome}/>
            <Button title= 'Salvar Pessoa' onPress={SalvarNome}/>
            <Text>Teste tela Async</Text>
        </View>
    )
}