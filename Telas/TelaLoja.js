import { View, Text, Button,  StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../configs/firebase';
import { Vibration } from 'react-native';

export default function TelaLoja() {

  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    firebase.database()
      .ref('roupas')
      .on('value', snapshot => {
        let data = snapshot.val();
        let dados = data
          ? Object.entries(data)
          : [];
        setRoupas(dados);
      });
  }, []);

  function adicionarCarrinho(id, item) {

    const uid = firebase.auth().currentUser.uid;

    if (item.quantidade <= 0) {
      alert("Sem estoque");
      return;
    }
    firebase.database()
      .ref('carrinhos/' + uid)
      .push({
        modelo: item.modelo,
        preco: item.preco
      });
    firebase.database()
      .ref('roupas/' + id)
      .update({
        quantidade: item.quantidade - 1
      });
      Vibration.vibrate(500);
    alert("Adicionado ao carrinho!");
  }

  return (
    <ScrollView style={styles.card}>
      {roupas.map(([id, item]) => (
        <View key={id}>
          <Text style={styles.texto}>{item.modelo}</Text>
          <Text style={styles.texto}>Cor: {item.cor}</Text>
          <Text style={styles.texto}>Tamanho: {item.tamanho}</Text>
          <Text style={styles.texto}>Preço: R$ {item.preco}</Text>
          <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
          <Button
            title="Adicionar ao carrinho"
            onPress={() => adicionarCarrinho(id, item)}
          />
          <Text>-------------------</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  texto: {
    fontSize: 16,
    marginBottom: 5
  }
});
