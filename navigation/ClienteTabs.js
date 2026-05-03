import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function Home() {
  return <Text>Home</Text>;
}

function Carrinho() {
  return <Text>Carrinho</Text>;
}

function Perfil() {
  return <Text>Perfil</Text>;
}

export default function ClienteTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}