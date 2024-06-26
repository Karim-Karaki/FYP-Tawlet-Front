import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import React from 'react'
import { ScrollView } from "react-native-gesture-handler"
import RestaurantCard from "../RestaurantCard"

export default function FeaturedRow({title, description, restaurants, images, ratings}) {
    return (
        <View>
            <View style={styles.container}>
                <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.viewAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="scroll"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <View style={{marginRight:20}}>
                                <RestaurantCard
                                    item = {restaurant}
                                    key = {index}
                                    width = {300}
                                    height = {144}
                                    style={{marginRight: 20}}
                                    image = {images[index]}
                                    rating={ratings[index]}
                                />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 25,
        lineHeight: 24,
        fontWeight: "bold",
    },
    description: {
        fontSize: 12,
        lineHeight: 16,
        color: "#7D7D7D",
    },
    viewAll: {
        color: "#FF6C44",
        fontWeight: "600",
    },
    scroll:{
        overflow: "visible",
        paddingTop: 20,
        paddingBottom: 20,
    }
})