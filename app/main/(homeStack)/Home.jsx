import React, { useEffect } from 'react'
import { Text, BackHandler, Alert, View, Button } from 'react-native'
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

    </SafeAreaView>
  )
}

export default Page