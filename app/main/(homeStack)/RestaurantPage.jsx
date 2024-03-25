import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, Pressable, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { Rating} from 'react-native-ratings';
import axios from 'axios';
import { restaurantConst, floorMap } from '../../../constants/constants';
import {Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { API_URL } from "@env";
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RestaurantPage() {

  const [restaurant, setRestaurant] = useState(null);
  const [restaurantReviewStats, setRestaurantReviewStats] = useState(null);
  const [restaurantImage, setRestaurantImage] = useState(null);
  const restaurantId = "6558ac688934c017e768bcfd";

  onPressReviewsButton = () => {
    if (restaurantReviewStats.totalReviews == 0) {
        return Alert.alert("Not available",'No reviews exist yet')
    }
    // this.makeRemoteRequest()
    console.log("OK")
  };

  useEffect(() => {

    // Get restaurant info to display
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}`);
        setRestaurant(response.data);
        setRestaurantImage(restaurantConst.image);
        // console.log("TEST")
      } catch (error) {
        // TODO check if weird relating to adding one more line for apiurl to work without cashed version
        console.error(error);
        // console.log(`${API_URL}/${restaurantId}`)
        // setRestaurant(restaurantConst);
      }
    };

    // Get review average and number of ratings
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`${API_URL}/review/restaurant/${restaurantId}/average`);
        setRestaurantReviewStats(response.data);
        if(response.data.averageRating == null){
          setRestaurantReviewStats({averageRating: 0, totalReviews: 0});
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the functions
    fetchRestaurantData();
    fetchReviewData();
  },[]);

  if (restaurant==null) {
    return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
    )
  }
  const restaurantMenuLink = "http://www.google.com"

  loadInBrowser = () => {
    Linking.openURL(restaurantMenuLink).catch(err => console.error("Couldn't load page", err));
  };

  return(
    // TODO FIX STUFF TO SAFEAREAVIEW TO REMOVE OVERLAPS
    <SafeAreaView>
      <ScrollView>
        <Image 
          style={styles.image}
          source={restaurantImage}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{restaurant.name} - {restaurant.location}</Text>
          {/* <Text style={styles.description}>{restaurant.description}</Text> */}
          {/* <Text style={styles.description}>{restaurant.cuisine}</Text> */}
          <Text style={styles}>Opening hours:{restaurant.openingHours}</Text>
          <View style={styles.cuisine}>
            <Text>Cuisine: </Text>
          {
            restaurant.cuisine.map((y) => {
                return (
                <Text style={styles.cuisineText}>{y} </Text>);
            })
          }
          </View>


        {/* TODO Make gray line into an import instead of copy paste */}
        {/* Gray line */}
        <View style={
          {
            flex: 1, 
            height: 1,
            backgroundColor: 'gray', 
            marginTop: 15,
            }
          }/>

        {/* Menu button and rating bar*/}
        <View style={
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
            }
          }>
          {/* Menu Button */}
          <Pressable style={styles.button} onPress={this.loadInBrowser}>
            <Text style={styles.text}>Menu</Text>
          </Pressable>
          {/* Rating nb */}
          <Text style={styles.ratingNumber}>{restaurantReviewStats.averageRating}</Text>
          {/* Rating stars */}
          <View>
            <Rating 
              type='custom'
              ratingCount={5}
              imageSize={40}
              tintColor='#f2f2f2'
              readonly
              ratingColor='crimson'
              startingValue={restaurantReviewStats.averageRating}
            />
            <Text style = {{color:"gray"}}> Based on {restaurantReviewStats.totalReviews} ratings</Text>
          </View>
          {/* Button to view all reviews */}
          <Pressable style={styles.viewAllButton} 
            onPress={this.onPressReviewsButton}
            >
            <Icon name="chevron-right" style={styles.viewAllText}/>
          </Pressable>
        </View>

        {/* Gray line */}
        <View style={
          {
            flex: 1, 
            height: 1,
            backgroundColor: 'gray',
            }
          }/>

        {/* List a review */}

        {/* Name and rating */}
        <View
          style={
            {
              flexDirection: 'row',
              justifyContent: 'left',
              marginTop: 5,
            }
          }>
            <Text
              style={{
                fontSize: 16,
              }}
              > User1 </Text>
            <Rating 
              type='custom'
              ratingCount={5}
              imageSize={20}
              tintColor='#f2f2f2'
              readonly
              ratingColor='crimson'
              startingValue={4}
            />
          </View>

        {/* Rating description*/}
        <Text
          style={{
            color: 'gray',
            marginBottom: 0,
          }}
        > 
          Good food, good service, good price. Such amazing food, the cheese sticks melted in my mouth
        </Text>

        {/* Gray line */}
        {/* <View style={
          {
            flex: 1, 
            height: 1,
            backgroundColor: 'gray',
            }
          }/> */}

        {/* Write a review button */}
          <Pressable 
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 7,
            }} 
            onPress={"this.loadInBrowser"}
            >
          <Text style={{color:'crimson'}}> <Icon name="edit" style={styles.writeReview}/>  Write a review</Text>
          <Rating 
              type='custom'
              ratingCount={5}
              imageSize={20}
              tintColor='#f2f2f2'
              readonly
              ratingColor='crimson'
              startingValue={4}
            />
          </Pressable>

        {/* Thick Gray line */}
        <View style={
          {
            flex: 1, 
            height: 3,
            backgroundColor: 'gray',
          }}/>

        {/* TODO ADD OFFERS EITHER CAROUSEL OR HORIZONTAL VIEW */}
        {/* List offers?*/}
        
        {/* Floor Map */}
        <Text style={styles.floorMapText}>Floor Map</Text>
        
        {/* Making it clickable */}
        <Pressable 
            onPress={() => router.replace("/main/FloorMap")}
            >
          <Image 
            style={styles.floorImage}
            source={floorMap}>
          </Image>
        </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: windowWidth,
    height: windowHeight/3.5,
    marginBottom: 10,
  },
  floorImage: {
    alignSelf: 'center',
    width: windowWidth*0.9,
    // height: windowHeight/4,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  floorMapText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
  },
  cuisine: {
    flexDirection: 'row',
    // marginTop: 10,
  },
  cuisineText: {
    color: 'gray',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'crimson',
    height: 60,
    width: 70,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  ratingNumber: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  rating: {
    color: 'crimson',
  },
  viewAllButton: {
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    height: 30,
    width: 30,
  },
  viewAllText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'crimson',
  },
  writeReview: {
    fontSize: 20,
    color: 'crimson',
  }
  
});
