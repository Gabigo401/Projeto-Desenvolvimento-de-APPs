import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button } from 'react-native';
import firebase from '../configs/firebase';

const Tab = createBottomTabNavigator();

function Home() {
  return <Text>Home</Text>;
}

function Carrinho() {
  return <Text>Carrinho</Text>;
}

function Perfil({navigation}) {
  function sair() {
    firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      });
  }

  return (
    <View>
      <Text>Perfil</Text>
      <Button title="Sair" onPress={sair} />
    </View>
  );
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
