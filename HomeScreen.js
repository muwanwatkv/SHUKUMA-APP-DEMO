import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/anime.json')} autoPlay loop style={{width:180,height:180}} />
      <Text style={styles.title}>Shukuma</Text>
      <Text style={styles.subtitle}>Move. Grow. Become.</Text>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Shuffle")}>
        <Text style={styles.text}>Shuffle Workout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.altButton} onPress={()=>navigation.navigate("Workout")}>
        <Text style={styles.textAlt}>Workout Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:"center",justifyContent:"center"},
  title:{fontSize:30,fontWeight:"bold"},
  subtitle:{color:"#666"},
  button:{backgroundColor:"#ff6fb3",padding:15,borderRadius:12,marginTop:20,width:"70%",alignItems:"center"},
  altButton:{backgroundColor:"#ffd6e8",padding:15,borderRadius:12,marginTop:10,width:"70%",alignItems:"center"},
  text:{color:"#fff",fontWeight:"bold"},
  textAlt:{color:"#333",fontWeight:"bold"}
});
