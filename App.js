import React, { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { GameOverScreen, GameScreen, StartGameScreen } from './screens';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from './constants';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setGameOver] = useState(true);
  const [guessRound, setGuessRounds] = useState(0);

  // game over handler function
  const gameOverHandler = ({ numberOfRounds }) => {
    setGuessRounds(numberOfRounds);
    setGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0); // Resetting the number of rounds on starting a new game
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
    screen = <GameOverScreen userNumber={userNumber} roundNumber={guessRound} onStartNewGame={startNewGameHandler} />;
    // screen = <GameOverScreen />;
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
