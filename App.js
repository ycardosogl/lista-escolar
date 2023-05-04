import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, FlatList, StyleSheet, Text, View } from 'react-native';


export default function App() {
  let listaInicial = ['lapis','caneta','caderno']
  let [listaMateriais, definirListaMateriais] = useState(listaInicial)
  let preco = ['1','2','3']
  let [precoMateriais, definirprecoMateriais] = useState(preco)

  
  

  return (
    <View style={styles.container}>
      <Text>APP-Lista material escolar</Text>
      <View style={styles.item}>
      <FlatList 
      data = {listaMateriais}
      renderItem={({item}) => <Text>{item}</Text>}
      />

<FlatList 
      data = { precoMateriais}
      renderItem={({item}) => <Text>{item}</Text>}
      />
</View>

<TextInput
      style={styles.input}
      placeholder={'Inserir Novo Item'}
      onSubmitEditing={({nativeEvent})=>
      definirListaMateriais(listaMateriais.concat(nativeEvent.text))
      }
/>

<TextInput
      style={styles.input}
      placeholder={'Inserir Novo Preço'}
      onSubmitEditing={({nativeEvent})=>
     definirprecoMateriais(precoMateriais.concat(nativeEvent.text))
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
    alignSelf: 'stretch',
    top:260
  },

  materiais: {
    top: 200,
   
  },
  item: {
    flexDirection:'row',
    alignItems: 'center',
marginVertical:5
   
  },

preco: {
  Bottom: 10,

}
  
});

