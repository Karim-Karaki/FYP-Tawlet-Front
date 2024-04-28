import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {colors} from "../constants/constants.js";
import StyledText from "../components/StyledText.jsx";
import StyledButton from "../components/StyledButton.jsx";
import { useRouter } from "expo-router";


const Page = () => {
  const router = useRouter();

  const goToPhoneAuth = () => {
    router.replace("/phoneAuth");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/Logo.jpg')}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <StyledText bold style={styles.title}>
            Welcome to Tawlet!
          </StyledText>
          <StyledText style={styles.description}>
            Looking for the perfect place for dinner tonight? Sign in to check
            out the best of what Lebanese restaurants have to offer!
          </StyledText>
        </View>
        <StyledButton outlined size="big" text="Get started" onPress={goToPhoneAuth} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    height: "30%",
    backgroundColor: colors.primary,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.background,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: colors.background,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Page;
