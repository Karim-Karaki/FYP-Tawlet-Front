import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import StyledInput from "../components/StyledInput";

const phoneAuth = () => {
  const [name, setName] = useState('');

  const printShit = (inputValue) => {
    setName(inputValue);
    console.log(inputValue);
}

  return (
    <SafeAreaView>
      <StyledInput
        size="medium"
        placeholder="Enter Name"
        value={name}
        onChange={printShit}
        type=""
      />
    </SafeAreaView>
  );
};

export default phoneAuth;
