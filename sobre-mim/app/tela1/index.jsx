import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SobreMim({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Meu app</Text>
      </View>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/19/40/8a/19408ad8f41334cc1a801072baed4c52.gif' }}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Bem-vindo(a) ao meu App</Text>
      <Text style={styles.description}>
        Nessa página você deve escrever um pouco sobre você comentando o que
        gosta de fazer e o que faz atualmente.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('/app/Movies')}
      >
        <Text style={styles.buttonText}>Ver os filmes que assisti</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('/app/Travel')}
      >
        <Text style={styles.buttonText}>Ver as minhas viagens</Text>
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
    backgroundColor: '#3579e6', 
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3579e6',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});