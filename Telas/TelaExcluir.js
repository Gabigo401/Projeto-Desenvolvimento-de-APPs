import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import firebase from '../configs/firebase';

export default function TelaExcluir() {

  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [quantidadeExcluir, setQuantidadeExcluir] = useState('');

  function apagar() {
    firebase.database()
      .ref('/roupas')
      .once('value', snapshot => {
        snapshot.forEach((filho) => {
          let item = filho.val();
          if (
            item.modelo === modelo &&
            item.cor === cor &&
            item.tamanho === tamanho
          ) {
            let novaQuantidade =
              item.quantidade - parseInt(quantidadeExcluir);
            if (novaQuantidade <= 0) {
              firebase.database()
                .ref('/roupas')
                .child(filho.key)
                .remove();
              alert("Produto removido!");
            } else {
              firebase.database()
                .ref('/roupas')
                .child(filho.key)
                .update({
                  quantidade: novaQuantidade
                });
              alert("Quantidade atualizada!");
            }
          }
        });
      });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Modelo" onChangeText={setModelo}/>
      <TextInput style={styles.input}  placeholder="Cor" onChangeText={setCor}/>
      <TextInput style={styles.input}  placeholder="Tamanho" onChangeText={setTamanho}/>
      <TextInput style={styles.input}  placeholder="Quantidade para excluir" onChangeText={setQuantidadeExcluir}/>
      <Button style={styles.botao}  title="Excluir" onPress={apagar}/>
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
