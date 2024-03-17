import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, Pressable  } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { Rating} from 'react-native-ratings';
import axios from 'axios';
import { restaurantConst, floorMap } from '../../../constants/constants';
import {Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RestaurantPage() {

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/restaurants/${route.params.id}`);
        setRestaurant(response.data);
        setRestaurant(restaurantConst);
      } catch (error) {
        console.error(error);
        setRestaurant(restaurantConst);
      }
    };
    fetchRestaurantData();
  // }, [route.params.id]);
  })  
  if (restaurant==null) {
    return <Text>Loading...</Text>;
  }
  const restaurantMenuLink = "http://www.google.com"

  loadInBrowser = () => {
    Linking.openURL(restaurantMenuLink).catch(err => console.error("Couldn't load page", err));
  };

  return(
    <View style>
      <ScrollView>
        <Image 
          style={styles.image}
          source={restaurant.image}
        />
        <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name} - {restaurant.address}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>


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
          <Text style={styles.ratingNumber}>3.5</Text>
          {/* Rating stars */}
          <View>
            <Rating 
              type='custom'
              ratingCount={5}
              imageSize={50}
              tintColor='#f2f2f2'
              readonly
              ratingColor='crimson'
              startingValue={3.5}
            />
            <Text style = {{color:"gray"}}> Based on 300 ratings</Text>
          </View>
          {/* Button to view all reviews */}
          <Pressable style={styles.viewAllButton} onPress={"this.loadInBrowser"}>
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

        {/* List offers?*/}
        
        {/* Floor Map */}
        <Text style={styles.floorMapText}>Floor Map</Text>
        
        <Image 
          style={styles.floorImage}
          source={floorMap}>
        </Image>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: windowWidth,
    height: windowHeight/3.5,
    marginTop: 25,
  },
  floorImage: {
    alignSelf: 'center',
    width: windowWidth*0.9,
    height: windowHeight/3.5,
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
