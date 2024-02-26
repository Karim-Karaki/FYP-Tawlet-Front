import {View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { categories } from '../constants/constants';

export default function Categories() {
    return (
        <View style={{alignContent:"center"}}>
            
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="horizontalScrollView"
                contentContainerStyle={styles.shows_horizontal_scrollView}
            >
            <FlatList
                contentContainerStyle={{alignSelf: 'flex-start'}}
                numColumns={4}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (
                    <View style={styles.content_container_style}>
                        <TouchableOpacity style={styles.touchable}>
                            <Image style={styles.image}
                                source={item.image}
                            />
                        </TouchableOpacity>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
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
        flex: 1,
        justifyContent: "center",
        itemAlign: "center",
        paddingHorizontal: 15,
        paddingVertical: 3,
        marginRight: 0,
    },
    touchable: {
        backgroundColor: "white",
        padding: 10,
        // marginRight: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        
    },
    image: {
        width:50,
        height:50
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
    },
    });
