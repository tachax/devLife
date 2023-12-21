import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImgButton from './component/ImgButton';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dev's Life</Text>

      <View style={styles.botoes}>
        <ImgButton titulo="water" />
        <Text>        </Text>
        <ImgButton titulo="coffee" /> 
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D8DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 26,
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row'
  }
});