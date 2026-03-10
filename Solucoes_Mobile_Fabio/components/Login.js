import {View, TextInput, Button, Image, Text, StyleSheet} from 'react-native';

export default function Login(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput placeholder='Usuário'/>
      <TextInput placeholder='Senha'/>
      <Button title='Entrar'/>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#9627c2ff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  text: {
      fontSize: 30,
      color: 
  },
})