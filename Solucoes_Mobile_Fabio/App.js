import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import { Person, Fabio } from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Fabio/>
      <Person/>
      <Text>Open up App.js to start working on your app!</Text>
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'center',
    backgroundColor: '#8b19b8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
