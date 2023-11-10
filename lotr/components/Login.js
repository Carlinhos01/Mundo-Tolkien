import { useState, useEffect } from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Firebase from './firebase.js';

export default function App({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');

  function dados(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function Login() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (initializing) setInitializing(false);
      {
        //ok
      }
    });
  }, []);

  if (user) {
    return navigation.navigate('Rotastab');
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Image source={require('../assets/olho.jpg')} style={estilos.tolk} />

      <TextInput
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        secureTextEntry={true}
        placeholderTextColor={'#fff'}
        style={estilos.textoinput}
        placeholder="Senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => {
          Login();
        }}>
        <Text style={estilos.textobotao}>Acessar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272727',
    padding: 8,
  },
  tolk: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 50,
  },
  textoinput: {
    width: 300,
    height: 40,
    paddingLeft: 15,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
  },
  botao: {
    width: 200,
    backgroundColor: '#2F4F4F',
    height: 40,
    marginTop: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textobotao: {
    fontSize: 30,
    color: '#fff5ee',
    fontWeight: 'bold',
  },
});
