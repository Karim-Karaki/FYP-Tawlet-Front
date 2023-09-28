import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledInput from "../components/StyledInput";
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";
import Colors from "../constants/colors";
import { API_URL } from "@env";
import axios from "axios";

const phoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [isOnCooldown, setIsOnCooldown] = useState(false);
  const [sent, setSent] = useState(false);
  const [code, setCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);

  const handleSendCode = async () => {
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
    const requestBody = {
      phoneNumber: `+961${phoneNumber}`,
      code: code,
    };

    try {
      const response = await axios.post(
        `http://${API_URL}/twilio/verify-code`,
        requestBody
      );

      if (response.data.verified) {
        console.log("Code verified successfully!");
        setInvalidCode(false);
      } else {
        console.log("Invalid code provided.");
        setInvalidCode(true);
      }
    } catch (error) {
      console.error("Error sending code:", error.message);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.textContainer}>
        <StyledText style={styles.title}>
          Enter your phone number to get started
        </StyledText>
        <StyledText style={styles.description}>
          We'll send you a verification code on WhatsApp
        </StyledText>
      </View>

      <StyledInput
        size="big"
        placeholder="Phone Number"
        type="phonenumber"
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
      {sent && (
        <StyledInput
          size="big"
          placeholder="Code"
          type="number"
          value={code}
          onChange={setCode}
          style={invalidCode ? { marginVertical:10, borderColor: "#FF0000" } : { marginVertical: 10 }}
        />
      )}
      {invalidCode && (
        <StyledText style={{ color: "#FF0000" }}>Invalid code</StyledText>
      )}
      <View style={styles.buttonContainer}>
        <StyledButton
          size="medium"
          text={isOnCooldown ? `${cooldown}s` : "Send code"}
          onPress={isOnCooldown ? null : handleSendCode}
          style={[isOnCooldown ? styles.disabled : {}, { marginRight: 10 }]}
          textStyle={isOnCooldown ? { color: Colors.description } : {}}
          disabled={isOnCooldown}
        />
        {sent && (
          <StyledButton
            size="medium"
            text="Submit"
            onPress={handleVerifyCode}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: "center",
    color: Colors.description,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  disabled: {
    backgroundColor: Colors.lightGray,
  },
});

export default phoneAuth;
