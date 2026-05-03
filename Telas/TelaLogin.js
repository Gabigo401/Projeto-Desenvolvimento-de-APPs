import { View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import firebase from '../configs/firebase';

export default function TelaLogin({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function ler() {
  const email = usuario.toLowerCase();

  firebase.auth()
    .signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      firebase.database()
        .ref('users/' + uid)
        .once('value')
        .then(snapshot => {
          const dados = snapshot.val();
          if (!dados) {
            alert("Usuário sem tipo definido");
            return;
          }
          const tipo = dados.tipo;
          if (tipo === "admin") {
            navigation.replace("AdminTabs");
          } else {
            navigation.replace("ClienteTabs");
          }
        });
    })
    .catch(error => {
      alert(error.message);
    });
}

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setUsuario} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <Button title="Entrar" onPress={ler} />
      <Button
        title="Ir para Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}