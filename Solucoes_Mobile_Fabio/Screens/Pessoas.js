import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Button, Card } from 'react-native-paper';
import {pessoa} from '../components/pessoa';


export default function Pessoas() {

  //const motorista = drivers[8]
  
  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>Pessoas Normais</Text>

      {pessoa.map((pessoas) => (

        <Card key={pessoas.id}>
          <Card.Cover source={{ uri: pessoas.image }} />
          <Card.Content style={styles.cards}>
            <Text style={styles.txt}>{pessoas.name}</Text>
            <Text style={styles.txt}>{pessoas.profissao}</Text>
            <Text style={styles.txt}>{pessoas.country}</Text>
            <Text style={styles.txt}>{pessoas.age}</Text>
            <Text style={styles.txt}>{pessoas.description}</Text>
          </Card.Content>  
        </Card>  
      ))} 

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
  
  justifyContent: 'center',
  alignItems: 'center'
  },
  txt:{
    fontSize: 20,
    textAlign: 'justify'
  },
  img:{
    width: 300,
    height: 300
  },
  cards:{
    alignItems: 'center',
  
  
  }

  
})