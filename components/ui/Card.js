import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primaryColor500,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
