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

const StyledButton = ({ size = 'medium', text, onPress, style, textStyle, outlined = false, disabled }) => {
  const currentSize = SIZE[size];
  const styles = StyleSheet.create({
    button: {
      width: currentSize.width,
      height: currentSize.height,
      backgroundColor: outlined ? Colors.background : Colors.primary,
      borderColor: outlined ? Colors.primary : Colors.background,
      borderWidth: outlined ? 1 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: currentSize.fontSize,
      color: outlined ? Colors.primary : Colors.background,
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;