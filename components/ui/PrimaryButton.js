import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.IOSPressed, styles.buttonInnerContainer] : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.buttonRippleColor }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    margin: 4,
    overflow: 'hidden',
    borderRadius: 28,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.buttonColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // ripple effect for ios
  IOSPressed: {
    opacity: 0.75,
  },
});
