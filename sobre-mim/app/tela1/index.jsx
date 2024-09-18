import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Meu app</Text>
      </View>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e2/fe/aa/e2feaa24ca77727e76420d902d2641bf.jpg' }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Nicolas Cabral Duarte</Text>
      <Text style={styles.description}>
        Bem vindo(a)! Nesse app irei mostrar um pouco dos meus gostos e etc (◕‿◕)
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('/app/Movies')}
      >
        <Text style={styles.buttonText}>Álbuns que eu gosto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('/app/Travel')}
      >
        <Text style={styles.buttonText}>Artistas de K-Pop favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 0,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#b5142b', 
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 35,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 35,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 35,
    color: '#929199'
  },
  button: {
    backgroundColor: '#b5142b',
    padding: 10,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});