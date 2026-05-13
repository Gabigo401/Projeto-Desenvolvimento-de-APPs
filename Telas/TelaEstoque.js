import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import firebase from '../configs/firebase';

export default function TelaEstoque() {

  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    firebase.database()
      .ref('roupas')
      .on('value', snapshot => {
        let data = snapshot.val();
        let dados = data ? Object.values(data) : [];
        setRoupas(dados);
      });
  }, []);

  return (
    <ScrollView style={styles.card}>
      {roupas.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.texto}>Modelo: {item.modelo}</Text>
          <Text style={styles.texto}>Cor: {item.cor}</Text>
          <Text style={styles.texto}>Tamanho: {item.tamanho}</Text>
          <Text style={styles.texto}>Preço: R$ {item.preco}</Text>
          <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
          <Text style={styles.texto}>-------------------</Text>
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
