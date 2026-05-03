import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function Inicio() {
  return <Text>Inicio</Text>;
}

function Estoque() {
  return <Text>Estoque</Text>;
}

function Adicionar() {
  return <Text>Adicionar</Text>;
}

function Excluir() {
  return <Text>Excluir</Text>;
}

export default function AdminTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Estoque" component={Estoque} />
      <Tab.Screen name="Adicionar" component={Adicionar} />
      <Tab.Screen name="Excluir" component={Excluir} />
    </Tab.Navigator>
  );
}