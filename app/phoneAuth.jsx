import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import StyledInput from "../components/StyledInput";
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import colors from "../constants/colors";
import { API_URL } from "@env";
import axios from "axios";
import { useRouter } from "expo-router";
import Footer from "../components/Footer";

const phoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [isOnCooldown, setIsOnCooldown] = useState(false);
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emptyCode, setEmptyCodeError] = useState(false);

  const router = useRouter();

  const handleSendCode = async () => {
    if (!phoneNumber) {
      setPhoneNumberError(true); 
      return; 
    }
    setPhoneNumberError(false);
    const requestBody = {
      phoneNumber: `+961${phoneNumber}`,
    };

    try {
      const response = await axios.post(
        `http://${API_URL}/twilio/send-code`,
        requestBody
      );
      console.log(response.data);
      setIsOnCooldown(true);
      setSent(true);
      setCooldown(60);
      const countdown = setInterval(() => {
        setCooldown((prevCooldown) => {
          if (prevCooldown <= 1) {
            clearInterval(countdown);
            setIsOnCooldown(false);
            return 0;
          }
          return prevCooldown - 1;
        });
      }, 1000);
    } catch (error) {
      console.error("Error sending code:", error.message);
    }
  };

  const handleVerifyCode = async () => {
    if (!code) {
      setEmptyCodeError(true); 
      return; 
    }
    setEmptyCodeError(false);
    const requestBody = {
      phoneNumber: `+961${phoneNumber}`,
      code: code,
    };

    try {
      const response = await axios.post(
        `http://${API_URL}/twilio/verify-code`,
        requestBody
      );
      console.log(response.data.message)
      if (response.data.verified) {
        setInvalidCode(false);
        if (response.data.message === "User already exists.") {
          router.replace("/main/Home")
        } else if (response.data.message === "New user created.") {
          router.replace({ pathname: "/profileCreation", params: { phoneNumber : phoneNumber }} )
        }
      } else {
        console.log("Invalid code provided.");
        setInvalidCode(true);
      }
    } catch (error) {
      console.error("Error sending code:", error.message);
    }
  };

  return (
    
    <KeyboardAvoidingScrollView style={{backgroundColor: colors.background, flex: 1}} contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
        <View style={styles.imageContainer}>
          {/* <Image
            source={{ uri: "https://placehold.co/300.png" }}
            style={styles.imageStyle}
          /> */}
          <StyledText style={{fontSize: 48, marginTop: 128, color: colors.primary}} bold>
            Welcome!
          </StyledText>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.textContainer}>
            <StyledText bold style={styles.title}>
              Let's get you a table!
            </StyledText>
            <StyledText style={styles.description}>
              Can we get your number? Don't worry, we're not asking you out. We
              just need to verify your identity.
            </StyledText>
          </View>
          <View style={styles.inputContainer}>
          <StyledInput
              size="big"
              placeholder="Phone Number"
              type="phonenumber"
              value={phoneNumber}
              onChange={setPhoneNumber}
              style={[
                { alignSelf: "center", marginVertical: 10 },
                phoneNumberError ? styles.inputError : null, 
              ]}
              length={8}
            />
            {phoneNumberError && (
              <StyledText style={[styles.errorText, { color: "#FF0000" }]}>
                Please enter a phone number
              </StyledText>
            )}
            {sent && (
              <StyledInput
                size="big"
                placeholder="Code"
                type="number"
                value={code}
                onChange={setCode}
                style={[ { alignSelf: "center", marginVertical: 10},
                  invalidCode || emptyCode
                    ? styles.inputError
                    : null
                ]}
                length={6}
              />
            )}
            {invalidCode && (
              <StyledText style={[styles.errorText, { color: "#FF0000" }]}>
                Invalid code
              </StyledText>
            )}
            {emptyCode && (
              <StyledText style={[styles.errorText, { color: "#FF0000" }]}>
                Missing code
              </StyledText>
            )}
            <StyledButton
              size="medium"
              text={isOnCooldown ? `${cooldown}s` : "Send code"}
              onPress={isOnCooldown ? null : handleSendCode}
              style={
                isOnCooldown
                  ? styles.disabled
                  : { alignSelf: "center", marginTop: 10 }
              }
              textStyle={isOnCooldown ? { color: colors.description } : {}}
              disabled={isOnCooldown}
            />

            <View style={styles.submitButtonContainer}>
              {sent && (
                <StyledButton
                  size="medium"
                  text="Submit"
                  onPress={handleVerifyCode}
                />
              )}
            </View>
          </View>
        </View>
        
      </SafeAreaView>
      <Footer/>
    </KeyboardAvoidingScrollView>
    

  );
};

const styles = StyleSheet.create({
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
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  disabled: {
    backgroundColor: colors.lightGrey,
    alignSelf: "center",
    marginTop: 20
  },
  imageContainer: {
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 100,
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  submitButtonContainer: {
    alignItems: "center",
    marginTop: 40,
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

export default phoneAuth;
