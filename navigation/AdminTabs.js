import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Button, StyleSheet } from 'react-native';
import firebase from '../configs/firebase';
import TelaAdicionar from '../Telas/TelaAdicionar';
import TelaEstoque from '../Telas/TelaEstoque';
import TelaExcluir from '../Telas/TelaExcluir';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Inicio({navigation}) {
  const usuario = firebase.auth().currentUser;
  function sair() {
    firebase.auth().signOut()
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

export default function AdminTabs() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icones = {
            Inicio: focused
              ? 'home'
              : 'home-outline',
            Estoque: focused
              ? 'cube'
              : 'cube-outline',
            Adicionar: focused
              ? 'add-circle'
              : 'add-circle-outline',
            Excluir: focused
              ? 'trash'
              : 'trash-outline',
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
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Estoque" component={TelaEstoque} />
      <Tab.Screen name="Adicionar" component={TelaAdicionar} />
      <Tab.Screen name="Excluir" component={TelaExcluir} />
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
