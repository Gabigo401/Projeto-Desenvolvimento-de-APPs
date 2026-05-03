import { View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import firebase from '../configs/firebase';

export default function TelaCadastro() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function gravar() {
  const email = user.toLowerCase();
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      return firebase.database()
        .ref('users/' + uid)
        .set({
          tipo: "cliente"
        });
    })
    .then(() => {
      alert('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use")
        alert("Esse e-mail já está em uso");
      else if (errorCode === "auth/weak-password")
        alert("Senha fraca (mínimo 6 caracteres)");
      else if (errorCode === "auth/invalid-email")
        alert("Formato de e-mail inválido");
      else
        alert("Erro: " + error.message);
    });
}

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setUser} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />
      <Button title="Cadastrar" onPress={gravar} />
    </View>
  );
}