import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, FlatList, StyleSheet, Text, View } from 'react-native';


export default function App() {
  let listaInicial = ['Caderno','Lapis','caneta azul']
  let [listaMateriais, definirListaMateriais] = useState(listaInicial)
  
  return (
    <View style={styles.container}>
      <Text>APP-Lista material escolar</Text>
      <FlatList
      data = {listaMateriais}
      renderItem={({item}) => <Text>{item}</Text>}
      />
      <TextInput
      style={styles.input}
      placeholder={'Inserir Novo Item'}
      onSubmitEditing={({nativeEvent})=>
      definirListaMateriais(listaMateriais.concat(nativeEvent.text))
      }
/>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'stretch'
  }
});

