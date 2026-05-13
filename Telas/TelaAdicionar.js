import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import firebase from '../configs/firebase';
import { Vibration } from 'react-native';

export default function TelaAdicionar() {

  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function salvar() {
  firebase.database()
    .ref('/roupas')
    .orderByChild('modelo')
    .equalTo(modelo)
    .once('value')
    .then(snapshot => {
      let encontrou = false;
      snapshot.forEach((filho) => {
        const roupa = filho.val();
        if (
          roupa.cor === cor &&
          roupa.tamanho === tamanho
        ) {
          encontrou = true;
          const novaQuantidade =
            Number(roupa.quantidade) + Number(quantidade);
          firebase.database()
            .ref('/roupas/' + filho.key)
            .update({
              quantidade: novaQuantidade
            });
        }
      });
      if (!encontrou) {
        firebase.database()
          .ref('/roupas')
          .push({
            modelo: modelo,
            cor: cor,
            tamanho: tamanho,
            preco: preco,
            quantidade: Number(quantidade)
          });
      }
      Vibration.vibrate(500);
      alert("Roupa adicionada!");
    });
}

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Modelo" onChangeText={setModelo}/>
      <TextInput style={styles.input} placeholder="Cor" onChangeText={setCor}/>
      <TextInput style={styles.input} placeholder="Tamanho" onChangeText={setTamanho}/>
      <TextInput style={styles.input} placeholder="Preço" onChangeText={setPreco}/>
      <TextInput style={styles.input} placeholder="Quantidade" onChangeText={setQuantidade}/>
      <Button style={styles.botao} title="Adicionar" onPress={salvar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15
  },
  botao: {
    marginBottom: 10
  },
});
