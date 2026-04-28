import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExemploAsyncStorage(){

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeSalvo, setNomeSalvo] = useState();

    const SalvarPessoa = async () => {
        const pessoa = {
            nome: nome,
            senha: senha
        };
        try {
            const jsonValue = JSON.stringify(pessoa);
            await AsyncStorage.setItem('@pessoa', jsonValue);
            alert('Pessoa salva!');
        } catch (e) {
            console.log(e);
        }
    };

    const MostrarPessoa = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@pessoa');
            if (jsonValue != null){
                const pessoa = JSON.parse(jsonValue);
                setNomeSalvo(pessoa);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        MostrarPessoa(); 
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <Button title='Salvar Pessoa' onPress={SalvarPessoa} />
            </View>

            {nomeSalvo && (
                <View style={styles.result}>
                    <Text style={styles.resultText}>Nome salvo:</Text>
                    <Text style={styles.nome}>{nomeSalvo?.nome}</Text>
                    <Text style={styles.nome}>{nomeSalvo?.senha}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonContainer: {
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    result: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 16,
        color: '#666',
    },
    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
        marginTop: 5,
    }
});