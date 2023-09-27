import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StyledInput from "../components/StyledInput";
import StyledText from "../components/StyledText";
import StyledButton from "../components/StyledButton";  
import Colors from "../constants/colors";

const phoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [sent, setSent] = useState(false);

  const handleSendCode = () => {
    // Implement sending the code here...

    setSent(true);
    // Start the cooldown timer
    setCooldown(60);
    const countdown = setInterval(() => {
      setCooldown(prevCooldown => {
        if (prevCooldown <= 1) {
          clearInterval(countdown);
          setSent(false);
          return 0;
        }
        return prevCooldown - 1;
      });
    }, 1000);
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

      <StyledButton
        size="medium"
        text={sent ? `${cooldown}s` : "Send code"}
        onPress={sent ? null : handleSendCode}
        style={sent ? styles.disabled : { marginTop : 20 }}
        textStyle={sent ? { color: Colors.description } : {}}
        disabled={sent}
      />
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
  disabled: {
    marginTop: 20,
    backgroundColor: Colors.lightGray,
  }
});

export default phoneAuth;
