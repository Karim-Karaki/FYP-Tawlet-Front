import {View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { categories } from '../constants/constants';

export default function Categories() {
    return (
        <View >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="horizontalScrollView"
                contentContainerStyle={styles.shows_horizontal_scrollView}
            >
            
            {
                categories.map((category, index) => {
                    return (
                        <View key={index} style={{backgroundColor: "lightblue", padding: 20, marginRight: 10, borderRadius: 10}}>
                            <TouchableOpacity className = "touchable">
                                <Image style={styles.image}
                                    source={category.image}
                                />
                                <Text style={styles.text}>{category.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                
                })
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mt4: {
    // Add your styles for the container view here
        marginTop: "1rem", 

    },
    shows_horizontal_scrollView: {
        overflow: "visible",
    },
    content_container_style: {
        paddingHorizontal: 15
    },
    touchable: {
        padding: "0.25rem",
     },
    image: {
        width:45,
        height:45
    },
    text: {
    // Add your styles for the text here
    },
    });
