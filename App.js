import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { GameOverScreen, GameScreen, StartGameScreen } from './screens';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Colors } from './constants';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setGameOver] = useState(true);

  // game over handler function
  const gameOverHandler = () => {
    return setGameOver(true);
  };

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  let screen = <StartGameScreen onPickedNumbered={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (isGameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primaryColor600, Colors.secondaryColor500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
