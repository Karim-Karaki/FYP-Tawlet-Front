import React from 'react';
import { View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';

const ReviewComponent = ({ review,reviewerName, tintColor }) => {
  return (
    // List a review 
    <View>
        {/* Name and rating */}
        <View style={{ 
            flexDirection: 'row',
            justifyContent: 'left',
            marginTop: 5, }}
            >
            {/* Name of reviewer */}
            <Text style={{ fontSize: 16, marginRight:10, marginBottom:10, }}>{reviewerName}</Text>
            {/* User rating */}
            <Rating
                type='custom'
                ratingCount={5}
                imageSize={20}
                tintColor={tintColor}
                readonly
                ratingColor='crimson'
                startingValue={review.rating}
                ratingBackgroundColor='#EEEEEE'
            />
        </View>
        {/* Rating description*/}
        <Text style={{ color: 'gray', marginBottom: 0 }}>{review.comment}</Text>
    </View>
  );
};

export default ReviewComponent;
