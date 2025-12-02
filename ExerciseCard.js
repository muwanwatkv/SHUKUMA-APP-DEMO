import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function ExerciseCard({exercise}) {
  const [flipped, setFlipped] = useState(false);
  const animated = React.useRef(new Animated.Value(0)).current;

  async function playFlip(){
    try {
      const { sound } = await Audio.Sound.createAsync(require('../assets/flip.wav'));
      await sound.playAsync();
    } catch(e){}
  }

  const flipCard = () => {
    playFlip();
    Animated.timing(animated, {
      toValue: flipped ? 0 : 180,
      duration: 400,
      useNativeDriver: true
    }).start();
    setFlipped(!flipped);
  };

  return (
    <TouchableOpacity onPress={flipCard} style={styles.card}>
      <Text style={styles.text}>{exercise.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card:{padding:20,backgroundColor:"#fff",borderRadius:12,margin:10},
  text:{fontSize:20,fontWeight:"bold"}
});
