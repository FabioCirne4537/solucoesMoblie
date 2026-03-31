import {View, Text, StyleSheet} from 'react-native'
import {useState } from 'react';
import { Button } from 'react-native-paper';

export default function App(){

  const [mensagem, setMensagem] =useState('Olá')
  const [count, setCount] =useState(0)

  function TrocaMsg(){
    if (mensagem == 'Olá'){
      setMensagem('Oi, trocamos de mensagem!')
    }else{
      setMensagem('Olá')
    }
  }

  function Contador(){
    setCount(count + 1)
  }

  function Decrementador(){
    if (count > 0){
      setCount(count - 1)
    }
  }

  return(
    <View style = {styles.container}>
      <Text style = {styles.txt}>{mensagem}</Text>
      {/* <Button
      title='Clique aqui'
      color={'#f1e6d2ff'}
      onPress={TrocaMsg}
      /> */}
      <Button 
      buttonColor={'#751333ff'}
      onPress={TrocaMsg}
      textColor='#fff'
      >
        Clique aqui
      </Button>

      <Text style = {styles.txt}>{count}</Text>

      <View style = {styles.row}>
        {/* <Button
        title='Contar'
        color={'#c0a26bff'}
        onPress={Contador}
        /> */}

        <Button 
        buttonColor={'#751333ff'}
        onPress={Contador}
        textColor='#fff'
        >
          Contar
        </Button>


        {/* <Button
        title='Decrementar'
        color={'#c0a26bff'}
        onPress={Decrementador}
        /> */}

        <Button 
        buttonColor={'#751333ff'}
        onPress={Decrementador}
        textColor='#fff'
        >
          Decrementar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 30,
  },
  row:{
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around'
  }
})


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, Image } from 'react-native';
// import Profile from './components/Profile';
// import { Person, Fabio } from './components/Profile';
// import Images from './components/Image'

// import Login from './components/Login'


// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text style={styles.txt_title}>Bem Vindo</Text>
//     //   <Images></Images>
//     //   <Images></Images>
//     //   <Images></Images>
//     // </View>

//     <Login></Login>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'center',
//     backgroundColor: '#8b19b8ff',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   txt_title:{
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#ffff'
//   },
// });
