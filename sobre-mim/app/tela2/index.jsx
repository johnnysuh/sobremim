import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const albuns = [
  {
    id: '1',
    titulo: '98.12.28 男達の別れ - Fishmans',
    ano: '1998',
    imagem: 'https://images.genius.com/50212f4510ca4832d8217a26c18fcf5c.1000x1000x1.jpg', 
  },
  {
    id: '2',
    titulo: 'Time n Place - Kero Kero Bonito',
    ano: '2018',
    imagem: 'https://m.media-amazon.com/images/I/819mPmzUaaL._UF1000,1000_QL80_.jpg',
  },
  {
    id: '3',
    titulo: 'Visions - Grimes',
    ano: '2012',
    imagem: 'https://m.media-amazon.com/images/I/71miHIEI9IL._UF1000,1000_QL80_.jpg',
  },
  {
    id: '4',
    titulo: '加爾基 精液 栗ノ花 - Sheena Ringo',
    ano: '2003',
    imagem: 'https://i.scdn.co/image/ab67616d0000b273e2d9afc08d7bc7f6165ed33f',
  },
  {
    id: '5',
    titulo: 'American Football - American Football',
    ano: '1999',
    imagem: 'https://m.media-amazon.com/images/I/71C2ZkbB0nL._UF1000,1000_QL80_.jpg',
  },
];

const AlbunsCard = ({ titulo, ano, imagem }) => (
  <View style={styles.card}>
    <Image source={{ uri: imagem }} style={styles.imagem} />
    <View style={styles.info}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.ano}>{ano}</Text>
    </View>
  </View>
);

const Albuns = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Álbuns</Text>
      </View>

      <FlatList
        data={albuns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AlbunsCard titulo={item.titulo} ano={item.ano} imagem={item.imagem} />
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
    height: 350,
  },
  info: {
    padding: 10,
  },
  titulo: {
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

export default Albuns;