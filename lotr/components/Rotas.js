import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Aneis from './Aneis';
import Hobbit from './Hobbit';
import Rotastab from './Rotastab';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, title: 'Login' }}
      />
      <Stack.Screen
        name="Rotastab"
        component={Rotastab}
        options={{ headerShown: false, title: 'Rotastab' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Stack.Screen
        name="Aneis"
        component={Aneis}
        options={{ headerShown: false, title: 'Aneis' }}
      />
      <Stack.Screen
        name="Hobbit"
        component={Hobbit}
        options={{ headerShown: false, title: 'Hobbit' }}
      />
    </Stack.Navigator>
  );
}
