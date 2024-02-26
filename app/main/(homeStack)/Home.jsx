import React, { useEffect } from "react";
import {
  Text,
  BackHandler,
  Alert,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import CarouselCards from "../../../components/Carousel/CarouselCards";
import FeaturedRow from "../../../components/FeaturedRow";
import FeaturedColumn from "../../../components/FeaturedColumn";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import {colors, featured} from "../../../constants/constants.js";
import Categories from "../../../components/Categories";
const Page = () => {

  return (
    // Top of page includes location button and news feed
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      

      {/* main */}
      <ScrollView
        ShowVersticalScroqlIndicator={false}
        styles={styles.scrollViewVertical}
      >
        <CarouselCards />

        {/* categories */}
        <Categories />

        {/* featured */}
        <View style={styles.featured}>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
        <View style={styles.featured}>
          {
            [featured].map((item, index) => {
              return (
                <FeaturedColumn
                  key={index}
                  title={"HELLO"}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // paddingHorizontal: 20 ,
    flexDirection: "column",
  },
  featured: {
    marginTop: 20,
  },
  newsItem: {
    // Style your news item here
    // Example: margin, padding, background color, etc.
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    // Style your buttons here
    // Example: margin, padding, background color, etc.
  },
  scrollViewVertical: {
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
});

export default Page;
