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
import CarouselCards from "../../../components/Home/Carousel/CarouselCards.jsx";
import FeaturedRow from "../../../components/Home/FeaturedRow.jsx";
import Sorties from "../../../components/Home/Sorties.jsx";
import FeaturedColumn from "../../../components/Home/FeaturedColumn.jsx";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import {colors, featured} from "../../../constants/constants.js";
import Categories from "../../../components/Home/Categories.jsx";
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
            [featured].map((item, index) => {
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
        {/* black line */}
        <View style={{flex: 1, height: 10, backgroundColor: 'gray'}} /></View>
        
        {/* sortie type */}
        <Sorties />

        {/* black line */}
        <View style={{flex: 1, height: 10, backgroundColor: 'gray'}}></View>
        
        {/* recommendations */}
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
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollViewVertical: {
    paddingBottom: 20,
    backgroundColor: colors.background,
  },
});

export default Page;
