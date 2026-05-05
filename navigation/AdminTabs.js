import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button } from 'react-native';
import firebase from '../configs/firebase';s

const Tab = createBottomTabNavigator();

function Inicio({navigation}) {
  function sair() {
    firebase.auth().signOut()
      .then(() => {
        navigation.replace("Login");
      });
  }

  return (
    <View>
      <Button title="Sair" onPress={sair} />
    </View>
  );
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
