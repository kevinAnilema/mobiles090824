import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {initializeApp} from "firebase/app";
import {getDatabase, ref, onValue, set} from "firebase/database";
import { useState } from 'react';
export default function App() {
  const [score, setScore]=useState<string>('')
  const [userId, setUser]=useState<string>('')
  const firebaseConfig = {
    apiKey: "AIzaSyCC4uY4mRBI5ySANdQShbnP28pooftoCHw",
    authDomain: "movilessabado-f46c9.firebaseapp.com",
    projectId: "movilessabado-f46c9",
    storageBucket: "movilessabado-f46c9.appspot.com",
    messagingSenderId: "152196470796",
    appId: "1:152196470796:web:6d96e80a3f24d3eb08f629"

  };
  initializeApp(firebaseConfig);
  function envioDatos(userId:string, score:string){
    const db=getDatabase();
    const reference=ref(db,'users/'+userId);
    set(reference,{
      highscore:score,
    })
  };
  return (
    <View style={styles.container}>
      <Text>App de base de datos timepo real</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingresa el usuario'
        value={userId}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingresa el valor maximo'
        value={score}
        onChangeText={setScore}
        keyboardType='numeric'
      />
      <Button
        title='Envio de datos'
        onPress={()=>envioDatos(userId,score)}
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
  input:{
    borderColor:'gray',
    borderWidth:3,
    width:'80%'
  }
});
