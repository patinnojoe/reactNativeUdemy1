import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.secondaryColor500,
  },
});
