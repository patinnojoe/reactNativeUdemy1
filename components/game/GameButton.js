import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../ui/PrimaryButton';

const GameButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <PrimaryButton>+</PrimaryButton>
      <PrimaryButton>-</PrimaryButton>
    </View>
  );
};

export default GameButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
