import { View, Text, StyleSheet, Alert } from 'react-native';

import { useEffect, useState } from 'react';
import { Card, InstructionText, NumberContainer, PrimaryButton, Title } from '../components';
import { Ionicons } from '@expo/vector-icons';

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

        <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText>
        <View style={styles.buttonOutterContainer}>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={20}></Ionicons>
            </PrimaryButton>
          </View>

          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={20} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    padding: 20,
  },
  buttonOutterContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  instructionText: {
    marginBottom: 12,
    fontSize: 20,
  },
});
