import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/colors.js";
import StyledText from "../components/StyledText.jsx";
import StyledButton from "../components/StyledButton.jsx";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  const goToPhoneAuth = () => {
    router.push("/phoneAuth");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://placehold.co/400x600.png" }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <StyledText bold style={styles.title}>
            Welcome to RRFYP!
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
    backgroundColor: Colors.primary,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.background,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.background,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Page;
