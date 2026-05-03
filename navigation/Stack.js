import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Telas/TelaLogin';
import CadastroScreen from '../Telas/TelaCadastro';
import ClienteTabs from './ClienteTabs';
import AdminTabs from './AdminTabs';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="ClienteTabs" component={ClienteTabs} />
      <Stack.Screen name="AdminTabs" component={AdminTabs} />
    </Stack.Navigator>
  );
}