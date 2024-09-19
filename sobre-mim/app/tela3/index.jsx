import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const kpop = [
  {
    id: '1',
    nome: 'SHINee',
    ano: '2008 - Now',
    imagem: 'https://preview.redd.it/63zz3hjr23171.jpg?width=1080&crop=smart&auto=webp&s=7692724e6923ccd227533c78fa135ca22ce5a018', 
  },
  {
    id: '2',
    nome: 'loona',
    ano: '2018',
    imagem: 'https://i.pinimg.com/736x/d9/e1/43/d9e143b7bfad31939fcd732bc266a7c7.jpg',
  },
  {
    id: '3',
    nome: 'triples',
    ano: '2012',
    imagem: 'https://i.pinimg.com/originals/a5/4e/87/a54e87f8a0da40466298b95641dc3688.jpg',
  },
  {
    id: '4',
    nome: 'lovelyz',
    ano: '2003',
    imagem: 'https://i.pinimg.com/564x/46/52/5a/46525aa930393a608099a891dfe96682.jpg',
  },
  {
    id: '5',
    nome: 'dia',
    ano: '1999',
    imagem: 'https://m.media-amazon.com/images/I/71C2ZkbB0nL._UF1000,1000_QL80_.jpg',
  },
];

const KpopCard = ({ nome, ano, imagem }) => (
  <View style={styles.card}>
    <Image source={{ uri: imagem }} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.ano}>{ano}</Text>
    </View>
  </View>
);

const GruposKpop = ({ navigation }) => {
    const voltar = () => {
      if (navigation) {
        navigation.goBack();
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={voltar} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Grupos de K-Pop</Text>
      </View>

      <FlatList
        data={kpop}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <KpopCard nome={item.nome} ano={item.ano} imagem={item.imagem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#b5142b',
    padding: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'start',
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 20,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ano: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default GruposKpop;