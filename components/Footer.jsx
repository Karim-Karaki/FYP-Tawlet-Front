import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import colors from "../constants/colors"

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <StyledText style={styles.footerText}>
        © {new Date().getFullYear()} Tawlet. All rights reserved.
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20, 
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.primary
      },
      footerText: {
        fontSize: 12, 
        color: colors.background, 
      },
    
})

export default Footer;
