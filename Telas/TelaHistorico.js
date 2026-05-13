import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../configs/firebase';

export default function TelaHistorico() {

  const [compras, setCompras] = useState([]);
  useEffect(() => {
    const uid = firebase.auth().currentUser.uid;
    firebase.database()
      .ref('historico/' + uid)
      .on('value', snapshot => {
        let data = snapshot.val();
        let dados = data
          ? Object.values(data)
          : [];
        setCompras(dados);
      });
  }, []);

  return (
    <ScrollView style={styles.card}>
      {compras.map((compra, index) => (
        <View style={styles.card} key={index}>
          {Object.values(compra.itens).map((item, i) => (
            <View style={styles.card} key={i}>
              <Text style={styles.texto}>Modelo: {item.modelo}</Text>
              <Text style={styles.texto}>Cor: {item.cor}</Text>
              <Text style={styles.texto}>Tamanho: {item.tamanho}</Text>
              <Text style={styles.texto}>Preço: {item.preco}</Text>
            </View>
          ))}
          <Text>----------------</Text>
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
