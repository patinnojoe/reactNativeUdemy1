import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Card, InstructionText, PrimaryButton, Title } from '../components';
import { useState } from 'react';
import { Colors } from '../constants';

function StartGameScreen({ onPickedNumbered }) {
  const [enteredNumber, setNumber] = useState('');

  const handleInputText = (enteredText) => {
    setNumber(enteredText);
  };

  const resetInputHandler = () => {
    setNumber('');
  };

  const submitInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'You have entered an Invalid number, number should be between 1 to 99', [
        {
          text: 'Cancel',
          onPress: resetInputHandler,
          style: 'destructive',
        },
      ]);
      return;
    }
    onPickedNumbered(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>

        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          onChangeText={handleInputText}
          value={enteredNumber}
        />
        <View style={styles.buttonOutterContainer}>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={submitInputHandler}>Submit</PrimaryButton>
          </View>

          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    // padding: 20,
  },

  textInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderColor: Colors.secondaryColor500,
    borderBottomWidth: 2,
    color: Colors.secondaryColor500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonOutterContainer: {
    flexDirection: 'row',
    // marginVertical: 10,
  },

  buttonInnerContainer: {
    flex: 1,
  },
});
