import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import { PrimaryButton, Title } from '../components';
import { Colors } from '../constants';

function GameOverScreen({ roudNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  console.log(`round number is ${roudNumber}`);

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  let imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over !!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.guessed}>{roudNumber}</Text> rounds to guess the number{' '}
          <Text style={styles.guessed}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    margin: 36,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    overflow: 'hidden',
    borderColor: Colors.primaryColor500,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guessed: {
    color: Colors.primaryColor500,
    fontWeight: 'bold',
  },
  summaryText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
