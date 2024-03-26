// ReviewPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import ReviewComponent from '../../../components/SingularReview';

export default function ReviewPage({ route }){
  const {restaurantReviews} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Restaurant Reviews</Text>
      <View>
        {restaurantReviews !== null && restaurantReviews.length > 0 ? (
          restaurantReviews.map((review, index) => (
            <ReviewComponent
            //   key={review._id}
              key = {index}
              review={review}
              reviewerName={"UserX"+" "}
            />
          ))
        ) : (
          <Text>No reviews available.</Text>
        )}
      </View>
    </View>
  );
};

// export default ReviewPage;
