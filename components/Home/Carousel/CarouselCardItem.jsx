import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import {carouselImages} from "../../../constants/constants.js"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9)
export const ITEM_HEIGHT = Math.round(Dimensions.get('window').height / 4)

const BORDER_RADIUS = 20

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={carouselImages[index]}
        style={styles.image}
        resizeMode='contain'
      />
      {/* <Text style={styles.header}>{item.title}</Text> */}
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      // paddingBottom: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      borderRadius: BORDER_RADIUS,
    },
    image: {
      flex:1 ,
      width: undefined,
      height: undefined,
      // width: ITEM_WIDTH,
      // height: ITEM_HEIGHT,
      borderRadius: BORDER_RADIUS,
    },
    header: {
      color: "#222",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      // paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }
  })
  
  export default CarouselCardItem
  