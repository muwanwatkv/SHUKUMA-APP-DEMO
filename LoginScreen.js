import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => navigation.replace("Main"))
      .catch(() => setError("Login failed"));
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => navigation.replace("Main"))
      .catch(() => setError("Registration failed"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Shukuma Login</Text>
        {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
        <TextInput placeholder="Password" secureTextEntry value={pass} onChangeText={setPass} style={styles.input}/>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={{color:"#fff"}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondary} onPress={register}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:"center",alignItems:"center"},
  card:{padding:20,backgroundColor:"#fff",borderRadius:12,width:"80%"},
  title:{fontSize:22,fontWeight:"bold"},
  input:{borderWidth:1,borderColor:"#ccc",padding:10,borderRadius:8,marginVertical:5},
  button:{backgroundColor:"#ff6fb3",padding:12,borderRadius:10,alignItems:"center"},
  secondary:{marginTop:10,alignItems:"center"}
});
