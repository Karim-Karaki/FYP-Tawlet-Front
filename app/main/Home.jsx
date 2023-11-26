import React, { useEffect } from 'react'
import { Text, BackHandler, Alert } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from '../../components/CustomHeader'

const Page = () => {


  return (
    <SafeAreaView>
      <CustomHeader/>
    </SafeAreaView>
    
  )
}

export default Page