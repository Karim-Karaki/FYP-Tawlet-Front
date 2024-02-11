import React, { useEffect } from 'react'
import { Text, BackHandler, Alert, View, Button, StyleSheet  } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from '../../../components/CustomHeader'
import Carousel from 'react-native-snap-carousel';

const Page = () => {
  const newsData = [
    // Your news data here
    // Example: { title: 'Breaking News', content: 'Lorem ipsum...' }
];
const foodCategories = [
  'French', 'Italian', 'Chinese', 'Arabic', 'Japanese' // Add more as needed
];

  return (
    <SafeAreaView>
      <CustomHeader/>
      
      <View style={styles.container}>
            {/* News Carousel */}
            {/* <Carousel
                data={newsData}
                renderItem={({ item }) => (
                    <View style={styles.newsItem}>
                        <Text>{item.title}</Text>
                        <Text>{item.content}</Text>
                    </View>
                )}
                sliderWidth={400}
                itemWidth={300}
            /> */}

            {/* Food Category Buttons */}
            {/* <View style={styles.categoryButtons}>
                {foodCategories.map(category => (
                    <Button
                        key={category}
                        title={category}
                        onPress={() => {
                            // Handle button press (e.g., navigate to category screen)
                        }}
                    />
                ))}
            </View> */}
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#456783',
  },
  newsItem: {
      // Style your news item here
      // Example: margin, padding, background color, etc.
  },
  categoryButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // Style your buttons here
      // Example: margin, padding, background color, etc.
  },
});

export default Page