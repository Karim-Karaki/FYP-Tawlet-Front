import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

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
      backgroundColor: outlined ? colors.background : colors.primary,
      borderColor: outlined ? colors.primary : colors.background,
      borderWidth: outlined ? 1 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      elevation: 2,
    },
    buttonText: {
      fontSize: currentSize.fontSize,
      color: outlined ? colors.primary : colors.background,
    },
  });

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;