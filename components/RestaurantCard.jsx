import {View, Text, StyleSheet, Button, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/Feather";
export default function RestaurantCard({item, width}) {

    return (
        <TouchableWithoutFeedback onPress={() => console.log("TEST")}>
            <View style={styles.container}>
            {/* onClick={console.log("HELLO")} */}
                <Image 
                    source={item.image} 
                    style={{width: width,
                            height: 144,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,}} 
                />
                <View style={styles.textContainer}> 
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.details}>
                        <Image source = {require('../assets/images/starRate.png')} style={styles.stars}></Image>
                        <Text style={styles.smallText}>
                            <Text styles={{color: "green"}}>{item.stars}</Text>
                            <Text styles={{color: "gray"}}> ({item.reviews} review) - <Text style={{fontWeight:600}}>{item.category}</Text>
                            </Text>     
                        </Text>
                    </View>
                    <View styles={styles.details}>
                        <Text style={styles.smallText}> <Icon name="map-pin" style={styles.mapPin}/> Nearby - {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        //TODO FIX SHADOW
        marginBottom: 20,
        borderRadius: 24,
        backgroundColor: "white",
        shadowColor: "#ffffe6",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        // elevation: 20,
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