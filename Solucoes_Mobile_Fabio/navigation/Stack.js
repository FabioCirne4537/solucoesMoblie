import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from './Screens/Login';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';

export default function Stack(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login Users'  component={Login}/>
        <Stack.Screen name='Home Screen'  component={Home}/>
        <Stack.Screen name='Pessoas Screen'  component={Pessoas}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}