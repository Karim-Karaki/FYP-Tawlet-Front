import React from 'react';
import { View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';

const ReviewComponent = ({ review,reviewerName }) => {
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
            <Text style={{ fontSize: 16 }}>{reviewerName}</Text>
            {/* User rating */}
            <Rating
                type='custom'
                ratingCount={5}
                imageSize={20}
                tintColor='#f2f2f2'
                readonly
                ratingColor='crimson'
                startingValue={review.rating}
            />
        </View>
        {/* Rating description*/}
        <Text style={{ color: 'gray', marginBottom: 0 }}>{review.comment}</Text>
    </View>
  );
};

export default ReviewComponent;
