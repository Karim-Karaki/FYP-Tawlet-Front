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
import ReviewComponent from '../../../components/SingularReview';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RestaurantPage() {
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState(null);
  const [restaurantReviewStats, setRestaurantReviewStats] = useState(null);
  const [restaurantImage, setRestaurantImage] = useState(null);
  const [restaurantReviews, setRestaurantReviews] = useState(null);
  const restaurantId = "65f8162ebc60f80b378893f1";

  // Loading link in browser function
  loadInBrowser = (restaurantMenuLink) => {
    Linking.openURL(restaurantMenuLink).catch(err => console.error("Couldn't load page", err));
  };

  // Menu Button function
  onPressMenuButton = () => {
    if(restaurant.menu == null){
      return Alert.alert("Not available",'No menu available')
    }
    else{
      loadInBrowser(restaurant.menu)
    }
  };

  // Check All Reviews Button function
  onPressReviewsButton = () => {
    if (restaurantReviewStats.totalReviews == 0) {
        return Alert.alert("Not available",'No reviews exist yet')
    }
    console.log(restaurantReviews)
  };

  useEffect(() => {

    // Get restaurant info to display
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`${API_URL}/restaurants/${restaurantId}`);
        setRestaurant(response.data);
        setRestaurantImage(restaurantConst.image);
      } catch (error) {
        // TODO check if weird relating to adding one more line for apiurl to work without cashed version
        console.error(error);
      }
    };

    // Get review average and number of ratings
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`${API_URL}/review/restaurant/${restaurantId}/average`);
        setRestaurantReviewStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Get all reviews if they exist
    const fetchReviews = async () => {
      // if (restaurantReviewStats.totalReviews != 0) {
        try {
          const response = await axios.get(`${API_URL}/review/restaurant/${restaurantId}`);
          setRestaurantReviews(response.data);
        } catch (error) {
          console.error(error);
        }
      // }
    };

    // Call the functions
    fetchRestaurantData();
    fetchReviewData();
    fetchReviews();
  },[]);

  if (restaurant==null) {
    return (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
    )
  }

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
          <Pressable style={styles.button} onPress={this.onPressMenuButton}>
            <Text style={styles.text}>Menu</Text>
          </Pressable>
          {/* Rating nb */}
          <Text style={styles.ratingNumber}>
            {restaurantReviewStats ? restaurantReviewStats.averageRating : "Error"}
          </Text>
          {/* Rating stars */}
          <View>
            <Rating 
              type='custom'
              ratingCount={5}
              imageSize={40}
              tintColor='#f2f2f2'
              readonly
              ratingColor='crimson'
              startingValue={restaurantReviewStats ? restaurantReviewStats.averageRating: 0}
            />
            <Text style = {{color:"gray"}}>
              Based on {restaurantReviewStats ? restaurantReviewStats.totalReviews : "error"} ratings
            </Text>
          </View>
          {/* Button to View All Reviews */}
          <Pressable style={styles.viewAllButton} 
            onPress={
              () => navigation.navigate('ReviewsPage',{
                restaurantReviews: restaurantReviews,
              })
              // () => router.replace("/main/ReviewsPage",{
              //   restaurantReviews: restaurantReviews,
              // })
            }
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
        {restaurantReviews !== null && restaurantReviews.length > 0 && (
          <ReviewComponent
            key={restaurantReviews[0]._id}
            review={restaurantReviews[0]}
            reviewerName={"UserX"}
            tintColor={'#f2f2f2'}
          />
          )}
        {/* ------------------ */}

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
