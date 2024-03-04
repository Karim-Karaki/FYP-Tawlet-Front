import {View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { categories } from '../../constants/constants';

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
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shows_horizontal_scrollView: {
        overflow: "visible",
    },
    content_container_style: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 0,
        width: 102,
    },
    touchable: {
        backgroundColor: "white",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        // marginRight: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
    },
    image: {
        width:40,
        height:40,
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
    },
    });
