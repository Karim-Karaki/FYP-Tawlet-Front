import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image
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
import { API_URL } from "@env";
import axios from 'axios';
import {restaurantImages, ratings} from "../../../constants/constants.js";

export default function Page(){

  const [restaurants, setRestaurants] = useState(null);
  const [offersRestaurants, setOffersRestaurants] = useState(null);

  useEffect(() => {

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${API_URL}/restaurants/`);
        setRestaurants(response.data);
        setOffersRestaurants(response.data.slice(8,11));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurants();

  }, []);

  return (
    // Top of page includes location button and news feed
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      {/* <Button title={"UIAS"} onPress={()=>console.log(restaurantImages)}/> */}

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
            offersRestaurants !== null &&  [featured].map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={offersRestaurants}
                  description={item.description}
                  images = {restaurantImages.slice(8,11)}
                  ratings = {ratings.slice(8,11)}
                />
              )
            }) 
          }
        {/* black line */}
        <View style={{flex: 1, height: 5, backgroundColor: '#D0D0D0'}} /></View>
        
        {/* sortie type */}
        <Sorties />

        {/* black line */}
        <View style={{flex: 1, height: 5, backgroundColor: '#D0D0D0'}}></View>
        
        {/* recommendations */}
        <View style={styles.featured}>
          {
            restaurants !== null &&  [featured].map((item, index) => {
              return (
                <FeaturedColumn
                  key={index}
                  title={"HELLO"}
                  restaurants={restaurants}
                  description={item.description}
                  images = {restaurantImages}
                  ratings = {ratings}
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

