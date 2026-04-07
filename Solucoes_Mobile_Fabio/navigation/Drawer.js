import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from './Screens/Login';
import Home from './Screens/Home';
import Pessoas from './Screens/Pessoas';

export default function Drawer(){
  const Drawer = createDrawerNavigator();
  return(
    <NavigationContainer screenOptions={{ headerShadowVisible: false,
      headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
      drawerItemStyle: {backGroundColor: "#7e0930ff", borderColor: 'black',
        borderWidth: 2, opacity: 0.6,},
      drawerActiveTintColor: '#fff', drawerLabelStyle: {fontSize: 20}
      }}>
      <Drawer.Navigator>
        <Drawer.Screen  name="Login" component={Login}/>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Pessoas" component={Pessoas}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}