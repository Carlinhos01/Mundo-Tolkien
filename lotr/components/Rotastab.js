import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Aneis from './Aneis';
import Home from './Home';
import Hobbit from './Hobbit';

const Tab = createBottomTabNavigator();

export default function Rotastab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ HeadersShown: false }}
      tabBarOptions={{
        style: { backgroundColor: '#696969' },
        tabStyle: { backgroundColor: '#696969' },
        activeTintColor: '#ffffff', 
        inactiveTintColor: '#A9A9A9',  
      }}>
      <Tab.Screen
        name=" The Lord of The Rings"
        component={Aneis}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ring" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#696969' }, 
          headerTintColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#696969' }, 
          headerTintColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name=" The Hobbit"
        component={Hobbit}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fire" color={color} size={size} />
          ),
          headerStyle: { backgroundColor: '#696969' }, 
          headerTintColor: '#ffffff',
        }}
      />
    </Tab.Navigator>
  );
}
