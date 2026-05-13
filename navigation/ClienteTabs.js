import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet } from 'react-native';
import firebase from '../configs/firebase';
import TelaLoja from '../Telas/TelaLoja';
import TelaCarrinho from '../Telas/TelaCarrinho';
import TelaHistorico from '../Telas/TelaHistorico';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Perfil({navigation}) {
  const usuario = firebase.auth().currentUser;
  function sair() {
    firebase.auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      });
  }

  return (
    <View style={styles.container}>
      <Ionicons
        name="person-circle"
        size={120}
        color="#e91e63"
        style={{ alignSelf: 'center' }}
      />
      <Text style={styles.titulo}> Perfil</Text>
      <Text style={styles.texto}> Email: </Text>
      <Text style={styles.email}> {usuario.email} </Text>
      <View style={styles.botao}>
        <Button title="Sair" onPress={sair}/>
      </View>
    </View>
  );
}

export default function ClienteTabs() {
  return (
    <Tab.Navigator    
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icones = {
            Loja: focused
              ? 'storefront'
              : 'storefront-outline',
            Carrinho: focused
              ? 'cart'
              : 'cart-outline',
            Historico: focused
              ? 'receipt'
              : 'receipt-outline',
            Perfil: focused
              ? 'person'
              : 'person-outline',
          };
          return (
            <Ionicons
              name={icones[route.name]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#aaa',
      })}>
     <Tab.Screen name="Loja" component={TelaLoja}/>
     <Tab.Screen name="Carrinho" component={TelaCarrinho}/>
     <Tab.Screen name="Historico" component={TelaHistorico}/>
     <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#e91e63'
  },
  texto: {
    fontSize: 18,
    textAlign: 'center'
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666'
  },
  botao: {
    marginTop: 10
  }
});
