import {View, Text, StyleSheet, Button, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RestaurantCard({item}) {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.textContainer}> 
                    <Text style={styles.title}>{item.name}</Text>
                    {/* <Text style={styles.description}>{item}</Text> */}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        borderRadius: 24,
        backgroundColor: "grey",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        // elevation: 20,
    },
    image: {
        width: 250,
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
})