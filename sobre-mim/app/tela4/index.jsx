import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const filmes = [
  {
    id: '1',
    nome: 'Happy Together (1997)',
    ano: 'Dir. Wong Kar Wai',
    imagem: 'https://filmartgallery.com/cdn/shop/products/Happy-Together-Vintage-Movie-Poster-Original-1-Sheet-27x41_f08e65a7-29a2-447b-ba59-337b9f849870.jpg?v=1664249522', 
  },
];

const FilmesCard = ({ nome, ano, imagem }) => {
  const router = useRouter();

  // Função para lidar com o clique no card do filme
  const handlePress = () => {
    router.push({
      pathname: '/tela4', // Rota para a tela 4
      params: { nome, ano, imagem }, // Enviando os parâmetros para a tela 4
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.ano}>{ano}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FilmesFavoritos = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Happy Together (1997)</Text>
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
    height: 480,
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