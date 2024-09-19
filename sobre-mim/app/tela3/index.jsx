import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const filmes = [
  {
    id: '1',
    nome: 'Happy Together (1997)',
    ano: 'Dir. Wong Kar Wai',
    imagem: 'https://i.pinimg.com/564x/18/a1/9c/18a19c755c03706189efa05b0520108e.jpg', 
  },
  {
    id: '2',
    nome: 'All About Lily Chou-Chou (2001)',
    ano: 'Dir. Shunji Iwai',
    imagem: 'https://i.pinimg.com/564x/53/85/f3/5385f3df9a39d176640e0ee0c6955615.jpg',
  },
  {
    id: '3',
    nome: 'Yi Yi (2000)',
    ano: 'Dir. Edward Yang',
    imagem: 'https://i.pinimg.com/564x/c9/c0/69/c9c0698fb81062ccc15f9df6c2c2ce2e.jpg',
  },
  {
    id: '4',
    nome: 'Ritual (2000)',
    ano: 'Dir. Hideaki Anno',
    imagem: 'https://i.pinimg.com/564x/fd/66/72/fd66727a7f236591df2a75fd24bfca60.jpg',
  },
  {
    id: '5',
    nome: 'Memories of Matsuko (2006)',
    ano: 'Dir. Tetsuya Nakashima',
    imagem: 'https://i.pinimg.com/736x/8a/47/31/8a4731441ef6ac0d6bad20ab002a4f19.jpg',
  },
];

const FilmesCard = ({ nome, ano, imagem }) => (
  <View style={styles.card}>
    <Image source={{ uri: imagem }} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.ano}>{ano}</Text>
    </View>
  </View>
);

const FilmesFavoritos = ({ navigation }) => {
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
        <Text style={styles.headerText}>Filmes favoritos</Text>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilmesCard nome={item.nome} ano={item.ano} imagem={item.imagem} />
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
    height: 160,
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

export default FilmesFavoritos;