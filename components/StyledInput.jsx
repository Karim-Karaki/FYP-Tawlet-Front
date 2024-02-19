import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import {colors} from "../constants/constants.js";

const StyledInput = ({
  size = "medium",
  placeholder,
  type = "text",
  value,
  onChange,
  length,
  style
}) => {
  const [isFocused, setIsFocused] = useState(false);
  let keyboardType = "default";

  switch (type) {
    case "number":
      keyboardType = "numeric";
      break;
    case "phonenumber":
      keyboardType = "phone-pad";
      break;
    default:
      break;
  }

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <TextInput
      style={[styles[size], isFocused ? styles.focused : styles.unfocused, style]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholderTextColor={colors.medium}
      maxLength={length}
    />
  );
};

const styles = StyleSheet.create({
  small: {
    height: 30,
    width: 100,
  },
  medium: {
    height: 40,
    width: 200,
  },
  big: {
    height: 50,
    width: 300,
  },
  focused: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: colors.background,
    borderColor: colors.background,
    color: colors.mediumDark,
    borderWidth: 1,
    shadowColor: "#000", // black shadow color
    shadowOffset: { width: 0, height: 2 }, // shadow direction and distance
    shadowOpacity: 0.1, // shadow opacity (0 is transparent, 1 is opaque)
    shadowRadius: 1, // blur radius
    elevation: 2, // Android elevation
  },
  unfocused: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: colors.background,
    color: colors.medium,
    shadowColor: "#000", // black shadow color
    shadowOffset: { width: 0, height: 2 }, // shadow direction and distance
    shadowOpacity: 0.1, // shadow opacity (0 is transparent, 1 is opaque)
    shadowRadius: 1, // blur radius
    elevation: 2, // Android elevation
  },
});

export default StyledInput;
