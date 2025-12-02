import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default function Timer({ initial=30, running, onComplete }) {
  const [time, setTime] = useState(initial);
  const intervalRef = useRef(null);

  async function playDone(){
    try {
      const { sound } = await Audio.Sound.createAsync(require('../assets/done.wav'));
      await sound.playAsync();
    } catch(e){}
  }

  useEffect(() => setTime(initial), [initial]);

  useEffect(() => {
    if(running){
      intervalRef.current = setInterval(() => {
        setTime(t => {
          if(t <= 1){
            clearInterval(intervalRef.current);
            playDone();
            onComplete?.();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  return (
    <View style={styles.wrap}>
      <Text style={styles.time}>{time}s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap:{ alignItems:"center" },
  time:{ fontSize:48, fontWeight:"bold", color:"#ff6fb3" }
});
