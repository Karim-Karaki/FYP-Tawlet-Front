import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { router } from 'expo-router';

const Page = () => {

  const reservations = [
    {
      restaurant: "Restaurant1", 
      date: "2021-10-10", 
      time: "19:00", 
      table: 3,
      guests: 2,
      logo: require('../../assets/images/logo1.jpg')
    },
    {
      restaurant: "Restaurant2", 
      date: "2021-10-10", 
      time: "19:00", 
      table: 3,
      guests: 2,
      logo: require('../../assets/images/logo2.jpg')
    },
    {
      restaurant: "Restaurant3", 
      date: "2021-10-10", 
      time: "19:00", 
      table: 3,
      guests: 2,
      logo: require('../../assets/images/logo3.jpg')
    },

  ]
  return (
    // TODO make it scrollable in case reservations exceed page height
    <SafeAreaView>
      <FlatList
      data={reservations}
      renderItem={({item}) => 
        // Flex container
        <View style={styles.container}>
          {/* Image of restaurant logo */}
          <View style={styles.imageContainer}>
            <Image 
            source={item.logo}
            style={styles.image}
            />
          </View>

          {/* Icon png on start of flexbox row */}
          <View>
          <Text style={styles.restaurantName}>{item.restaurant}</Text>
          <Text style={styles.reservationDetails}>{item.date}, {item.time}, table number{item.table}</Text>
          <Text style={styles.reservationDetails}>Table for {item.guests} people</Text> 
          </View>

          {/* Button that takes you to restaurant page */}
          <Pressable style={styles.goToRestaurantButton} onPress={() => router.replace("/main/RestaurantPage")}>
            <Icon name="chevron-right" style={styles.arrowRight}/>
          </Pressable>
        </View>
      
        }
        />
    </SafeAreaView>
    
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 20 ,
    marginVertical: 10,
    alignItems: "center",
    // justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageContainer:{
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 2,
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  restaurantName:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  reservationDetails:{
    fontSize: 12,
    color: 'gray',
  },
  moveLeftSlightly:{
    marginRight: 10,
  },
  goToRestaurantButton:{
    backgroundColor: '#F8F9FA',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "auto",
    marginRight: 10,
  },
  arrowRight:{
    // color: 'white',
    fontSize: 20,
  }
});