import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const listaInicial = [{ nome: 'nome', preco: 'preco' }];
  const [listaMateriais, definirListaMateriais] = useState(listaInicial);
  
  

  const adicionarPreco = (preco) => {
    const novoItem =[{ nome: nome, preco: preco }];
    definirListaMateriais([...listaMateriais, novoItem]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome  !== '' ? ` ${item.nome}` : ''}</Text>
      <Text>{item.preco !== '' ? `R$ ${item.preco}` : ''}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>APP - Lista de Material Escolar</Text>
      <FlatList
        data={listaMateriais}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <TextInput
        placeholder={'Inserir Novo Item'}
        onSubmitEditing={({ nativeEvent }) => {
          const ultimoItem = listaMateriais[listaMateriais.length - 1];
          if (ultimoItem.preco !== '') {
            definirListaMateriais(
              listaMateriais.concat({ nome: nativeEvent.text, preco: '' })
            );
          }
        }}
      />

      <TextInput
        placeholder={'Inserir Novo Preço'}
        onSubmitEditing={({ nativeEvent }) => {
          if (ultimoItem.nome !== '') {
            adicionarPreco(nativeEvent.text);
          }
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});
