import React, { useEffect } from 'react'
import { Text, BackHandler, Alert, View, Button, StyleSheet, Dimensions  } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from '../../../components/CustomHeader'
import Carousel from 'react-native-snap-carousel';
import CarouselCards from '../../../components/Carousel/CarouselCards';
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import colors from "../../../constants/colors";
const Page = () => {
  const newsData = [
    // Your news data here
    // Example: { title: 'Breaking News', content: 'Lorem ipsum...' }
];
const foodCategories = [
  'French', 'Italian', 'Chinese', 'Arabic', 'Japanese' // Add more as needed
];
const staticData = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
];
const renderItem = ({ item }) => {
  return(
  <View style={{ backgroundColor: 'lightblue', padding: 20 }}>
      <Text>{item.title}</Text>
  </View>
  );
};
  return ( 
    // <KeyboardAvoidingScrollView style={{backgroundColor: colors.background, flex: 1}} contentContainerStyle={{ flexGrow: 1 }}>
    <SafeAreaView style={styles.container}>  
      <CustomHeader/>
      <CarouselCards/>
    </SafeAreaView>
    // </KeyboardAvoidingScrollView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20 ,
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // Semi-transparent red overlay
},
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  content: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
  },
  footer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightcoral',
  },
  newsItem: {
      // Style your news item here
      // Example: margin, padding, background color, etc.
  },
  categoryButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // Style your buttons here
      // Example: margin, padding, background color, etc.
  },
});

export default Page