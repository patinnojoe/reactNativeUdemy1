import { View, Text, StyleSheet, Alert } from 'react-native';

import { useEffect, useState } from 'react';
import { Card, NumberContainer, PrimaryButton, Title } from '../components';

// import GameButton from '../components/game/GameButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  // check if the current guess is equal to the inputted user number

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Dont't lie, you know this is wrong", 'You thats not true'[{ text: 'Sorry', style: 'cancel' }]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  }
  return (
    <View style={styles.rootContainer}>
      <Title> Oponents Guess</Title>
      <Card>
        <NumberContainer>{currentGuess}</NumberContainer>

        <View>
          <Text>Higher or Lower ?</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    // alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
