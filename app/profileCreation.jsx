import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import StyledInput from "../components/StyledInput";
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import Colors from "../constants/colors";
import { API_URL } from "@env";
import axios from "axios";

const profileCreation = () => {
  return (
    <View>
      <Text>profileCreation</Text>
    </View>
  )
}

export default profileCreation