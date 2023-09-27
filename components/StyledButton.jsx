import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const SIZE = {
  small: {
    width: 100,
    height: 30,
    fontSize: 14,
  },
  medium: {
    width: 150,
    height: 45,
    fontSize: 18,
  },
  big: {
    width: 350,
    height: 45,
    fontSize: 18,
  },
};

const StyledButton = ({ size = 'medium', text, onPress }) => {
  const currentSize = SIZE[size];
  const styles = StyleSheet.create({
    button: {
      width: currentSize.width,
      height: currentSize.height,
      backgroundColor: Colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: currentSize.fontSize,
      color: Colors.primary,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
