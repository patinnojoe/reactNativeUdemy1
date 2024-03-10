import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.secondaryColor500,
  },
});
