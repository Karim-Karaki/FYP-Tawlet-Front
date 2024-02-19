import React, { useState } from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import StyledInput from "../components/StyledInput";
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import {colors} from "../constants/constants.js";
import { useLocalSearchParams, useRouter } from "expo-router";
import { API_URL } from "@env";
import axios from "axios";
import Footer from "../components/Footer";

const profileCreation = () => {
  const { phoneNumber } = useLocalSearchParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [date, setDate] = useState("24/05/2002");

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = async () => {
    let isValid = true;
    if (!name) {
      setEmptyName(true);
    }
    if (!email) {
      setEmptyEmail(true);
      setEmailError('Email cannot be empty');
      isValid = false; 
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      setEmptyEmail(true);
      isValid = false; 
    }

    if (!isValid) {
      return; 
    }
    const requestBody = {
      phoneNumber: `+961${phoneNumber}`,
      name: name,
      email: email,
      dob: date
    };
    try {
      const response = await axios.post(
        `http://${API_URL}/twilio/register-login`,
        requestBody
      );
      console.log(response.data);
      router.replace("/main/Home");
    } catch (error) {
      console.error("Error creating profile:", error.message);
    }
  };

  const handleChangeNumber = () => {
    router.replace("/phoneAuth")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StyledText bold style={styles.title}>
          One step closer!
        </StyledText>
        <StyledText style={styles.description}>
          We just need a few more details to get you started.
        </StyledText>
      </View>
      <View style={styles.inputContainer}>
        <StyledButton
          size="medium"
          text={phoneNumber}
          onPress={null}
          style={[{ marginBottom: 10 }, styles.disabled]}
          textStyle={{ color: colors.description }}
          disabled={true}
        />
        <StyledInput
          size="big"
          placeholder="Name"
          value={name}
          onChange={setName}
          style={[styles.input, emptyName ? styles.inputError : null]}
          length={70}
        />
        {emptyName && (
              <StyledText style={[styles.errorText, { color: "#FF0000" }]}>
                Missing name
              </StyledText>
            )}
        <StyledInput
          size="big"
          placeholder="Email"
          type="email"
          value={email}
          onChange={setEmail}
          style={[styles.input, emptyEmail ? styles.inputError : null]}
          length={320}
        />
        {emptyEmail && (
              <StyledText style={[styles.errorText, { color: "#FF0000" }]}>
                {emailError || 'Missing email'}
              </StyledText>
            )}
        <StyledButton
          size="medium"
          text={date}
          onPress={null}
          style={[{ marginBottom: 10 }, styles.disabled]}
          textStyle={{ color: colors.description }}
          disabled={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton size="medium" text="Change Number" onPress={handleChangeNumber} outlined />
        <StyledButton size="medium" text="Sign Up" onPress={handleSignUp} />
      </View>
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: colors.description,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    marginTop: 20,
    width: '100%',
  },
  disabled: {
    backgroundColor: colors.lightGrey,
    alignSelf: "center",
  },
  errorText: {
    alignSelf: "center",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "#FF0000",
    borderWidth: 1,
  },
});

export default profileCreation;
