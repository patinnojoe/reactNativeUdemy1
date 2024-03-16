import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.secondaryColor500,
    padding: 20,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.secondaryColor500,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
