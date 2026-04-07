import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';

export default function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: '#fff',
        tabBarActiveTintColor: '#7e0930ff',
        tabBarInactiveBackgroundColor: '#ecddb4ff',

        headerStyle:{
          backgroundColor: '#961f46ff',
        },
        headerTintColor:'#ecddb4ff',
        headerTitleAlign: 'center'
      }}>
        <BottomTab.Screen name="Login" component={Login}
        options={{tabBarIcon: () => (<Entypo name='login' size={24} color='#7e0930ff'/> )}}/>  
        <BottomTab.Screen name="Home" component={Home}
        options={{tabBarIcon: () => (<Entypo name='home' size={24} color='#7e0930ff'/> )}}/>
        <BottomTab.Screen name="Pessoas" component={Pessoas}
        options={{tabBarIcon: () => (<Entypo name='list' size={24} color='#7e0930ff'/> )}}/>    
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

