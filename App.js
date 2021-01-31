import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);

  const buttonPressed = () => {
    setData([...data, {key:text }]);
    setText('' );
  }

  const listRemoved = () =>{
    setData([]);
  }

  return (
    <View style={styles.container}>

      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} 
       onChangeText={text => setText(text)}
      value={text}/>
        <Button onPress = {buttonPressed} title="Add"/> 
        <Button onPress = {listRemoved} title="Clear"/>
      <Text style={{color: 'blue'}}>Shopping list</Text>
      <FlatList 
      data ={data}
      renderItem={({item}) =><Text>{item.key}</ Text>}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
