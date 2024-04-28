// ReviewPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import ReviewComponent from '../../../components/SingularReview';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReviewPage({ route }){

    const route1 = useRoute();
    const {restaurantReviews} = route1.params;
    // const restaurantReviews=null
    console.log(route1);

    
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {restaurantReviews !== null && restaurantReviews.length > 0 ? (
          restaurantReviews.map((review, index) => (
            <View  style={styles.reviewContainer}>
                <ReviewComponent
                key = {index}
                review={review}
                reviewerName={"User" + index}
                tintColor={'white'}
                />
            </View>
          ))
        ) : (
          <Text>No reviews available.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    reviewContainer:{
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    reviewList: {
        margin: 10,
    },
});

