import { View, Text, StyleSheet, TouchableOpacity, Dimensions} from "react-native"
import React from 'react'
import { ScrollView } from "react-native-gesture-handler"
import RestaurantCard from "./RestaurantCard"

export default function FeaturedColumn({title, description, restaurants}) {
    return (
        <View>
            <View style={styles.container}>
                {/* <View> */}
                <Text style={styles.title}>Recommendations</Text>
                {/* <Text style={styles.description}>
                    {description}
                </Text> */}
                {/* </View> */}
                <TouchableOpacity>
                    <Text style={styles.viewAll}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                vertical
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="scroll"
            >
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <RestaurantCard
                                item = {restaurant}
                                key = {index}
                                width = {this.width}
                            />
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
        // paddingHorizontal: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 18,
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
        // paddingTop: 20,
        // paddingBottom: 20,
    }
})