import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const StyledInput = ({
  size = "medium",
  placeholder,
  type = "text",
  value,
  onChange,
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
      placeholderTextColor={Colors.lightGray}
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
    borderRadius: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    color: Colors.title,
    borderWidth: 1,
  },
  unfocused: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.lighterGray,
    color: Colors.title,
  },
});

export default StyledInput;
