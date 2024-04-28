import {View, Text, StyleSheet, Button, Image, TouchableWithoutFeedback} from 'react-native';
import React,  { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
// import RestaurantPage from '../app/main/(homeStack)/RestaurantPage';
import { router } from 'expo-router';
import axios from 'axios';

export default function RestaurantCard({item, width,height, image, rating}) {
    
    // 403 FORBIDDEN ERROR
    // const [restaurantImage, setRestaurantImage] = useState(null);
    // useEffect(() => {
    //     const fetchRestaurantImage = async () => {
    //       try {
    //         const response = await axios.get(`https://tawlet-bucket.s3.eu-north-1.amazonaws.com/TheAUB3`);
    //         setRestaurantImage(response.data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    //     fetchRestaurantImage();
    //   }, []);
      
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback 
        // onPress={() => console.log(image)}
        onPress={() => navigation.navigate('RestaurantPage', {restaurantId: item._id})}
        >
            <View style={styles.container}>
                {/* Restaurant Image */}
                <Image 
                    source={image} 
                    style={{
                        width: width,
                        height: height,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }} 
                />
                <View style={styles.textContainer}> 

                {/* Name of restaurant */}
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.details}>
                        <Image source = {require('../assets/images/starRate.png')} style={styles.stars}></Image>
                        <Text style={styles.smallText}>

                            {/* Rating */}
                            {/* <Text styles={{color: "green"}}>{item.stars}</Text> */}

                            {/* Number of reviews / Type*/}
                            <Text styles={{color: "gray"}}> {rating} - <Text style={{fontWeight:600}}>{item.sortieType}</Text>
                            </Text>     
                        </Text>
                        
                    </View>

                    {/* Cuisine */}
                    <View styles={styles.details}>
                        <Text style={styles.smallText}> <MaterialIcons name="restaurant" style={styles.mapPin}/>  {
                                item.cuisine && item.cuisine.map((y, index) => {
                                return <Text key={index} style={styles.cuisineText}>{y} </Text>;
                                })
                            } 
                        </Text>
                    </View>

                    {/* Location */}
                    <View styles={styles.details}>
                        <Text style={styles.smallText}> <Icon name="map-pin" style={styles.mapPin}/> {item.location}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        //TODO FIX SHADOW
        marginBottom: 35,
        borderRadius: 24,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,

    },
    image: {
        height: 144,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textContainer: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 16,
        marginTop: 8,
    },
    title: {
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "bold",
        paddingTop: 8,
    }, 
    details: {
        flexDirection: "row",
        alignItems: "center",
    },
    stars:{
        width: 16,
        height: 16,
    },
    smallText: {
        fontSize: 12,
        lineHeight: 16,
        color: "gray",
    },
    mapPin:{
        width: 15,
        height: 15,
        color: "gray",
    }
})