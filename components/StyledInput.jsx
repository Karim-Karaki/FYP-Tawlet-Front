import React from "react";
import { TextInput, StyleSheet } from "react-native";

const StyledInput = ({
  size = "medium",
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
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

  return (
    <TextInput
      style={{ ...styles[size] }}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChange}
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
});

export default StyledInput;
