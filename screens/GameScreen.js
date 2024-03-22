import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';

import { useEffect, useState } from 'react';
import { Card, GuessLogItem, InstructionText, NumberContainer, PrimaryButton, Title } from '../components';
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
  const [guessRound, setGuessRound] = useState([initialGuess]);

  // check if the current guess is equal to the inputted user number
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  // reset the min and max boundary on first render
  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

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
    setGuessRound((prevRounds) => [newRandomNum, ...prevRounds]);
    onGameOver({ numberOfRounds: guessRound.length + 1 }); //added
  }
  const guessGmeRound = guessRound.length;

  // get width abd height
  const { width, height } = useWindowDimensions();
  const marginTopSpace = height < 400 ? 25 : 100;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        {/* <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText> */}
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="add" size={20}></Ionicons>
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="remove" size={20} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={[styles.rootContainer, { marginTop: marginTopSpace }]}>
      <Title> Oponents Guess</Title>
      {content}

      <View style={styles.listContainer}>
        {
          <FlatList
            data={guessRound}
            renderItem={(itemData) => (
              <GuessLogItem roundNumber={guessGmeRound - itemData.index} guess={itemData.item} />
            )}
            keyExtractor={(item) => item.toString()}
            scrollEnabled={true}
          />
        }
      </View>
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
    // marginTop: height < 350 ? 25 : 100,
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
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
