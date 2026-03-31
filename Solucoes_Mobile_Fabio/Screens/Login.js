import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

export default function Login({navigation}){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput placeholder='Usuário'/>
      <TextInput placeholder='Senha'/>
      <Button title='Entrar'
      color={'#7e0930ff'}
      onPress={() => navigation.navigate('Home Screen')}/>
      <Button title='Pessoas'
      color={'#7e0930ff'}
      onPress={() => navigation.navigate('Pessoas Screen')}/>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#ecddb4ff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  text: {
      fontSize: 30,
      color: '#7e0930ff',
  }
})