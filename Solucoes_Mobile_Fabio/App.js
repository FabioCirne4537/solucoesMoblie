import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from './Screens/Login';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';

function TabNavigate(){
  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Pessoas' component={Pessoas}/>
    </Tab.Navigator>
  )
}

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TabNavigate}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

