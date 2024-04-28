import {View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { sorties } from '../../constants/constants';

export default function Sorties() {
    return (
        <View 
            style={
                {alignContent:"center",
                justifyContent: "center",
                marginVertical: 10,
                }}>
            
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="horizontalScrollView"
                contentContainerStyle={styles.shows_horizontal_scrollView}
            > */}
                <View contentContainerStyle={{alignSelf: 'flex-start'}}>
                    {/* <Text >Sortie Type</Text> */}
                    <FlatList
                       
                        numColumns={4}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={sorties}
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
                </View>
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    shows_horizontal_scrollView: {
        overflow: "visible",
    },
    content_container_style: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 3,
        marginRight: 0,
    },
    touchable: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        // padding: 10,
        // marginRight: 10,
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
        height:40
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
    },
    });
