import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../configs/firebase';
import { Vibration } from 'react-native';

export default function TelaCarrinho() {

  const [carrinho, setCarrinho] = useState([]);
  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    firebase.database()
      .ref('carrinhos/' + uid)
      .on('value', snapshot => {
        let data = snapshot.val();
        let dados = data ? Object.values(data) : [];
        setCarrinho(dados);
      });
  }, []);

  function finalizarCompra() {
      Vibration.vibrate(1000);
    const uid = firebase.auth().currentUser.uid;
    firebase.database()
      .ref('carrinhos/' + uid)
      .once('value')
    .then(snapshot => {
      const itens = snapshot.val();
      if (!itens) {
        alert("Carrinho vazio");
        return;
      }
      firebase.database()
        .ref('historico/' + uid)
        .push({
          data: new Date().toLocaleString(),
          itens: itens
        });
      firebase.database()
        .ref('carrinhos/' + uid)
        .remove();
      alert("Compra finalizada!");
    });
  }

  return (
    <ScrollView style={styles.card}>
      {carrinho.length > 0 ? (
        <View style={styles.card}>
          {carrinho.map((item, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.texto}>Modelo: {item.modelo}</Text>
              <Text style={styles.texto}>Cor: {item.cor}</Text>
              <Text style={styles.texto}>Tamanho: {item.tamanho}</Text>
              <Text style={styles.texto}>Preço: R$ {item.preco}</Text>
              <Text>-------------------</Text>
            </View>
          ))}
          <Button title="Finalizar Compra" onPress={finalizarCompra}/>
          </View>
      ): 
      (
        <Text>Carrinho vazio</Text>
      )}
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
