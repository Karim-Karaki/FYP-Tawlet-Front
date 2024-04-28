import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions, Image, Button } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from '@rneui/themed';
import axios from 'axios';
import { API_URL } from "@env";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = () => {

  const [ search, setSearch ] = useState("");
  const [restaurants, setRestaurants] = useState(null);

  updateSearch = (search) => {
    setSearch({ search });
  };

  
  // useEffect(() => {
  //   const fetchRestaurantsByCuisine = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/restaurants/cuisine/Pasta`);
  //       setRestaurants(response.data);
  //       console.log("TEST", response.data)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchRestaurantsByCuisine();

  // }, []);

  const categories = [
    {
      id: 1,
      name: 'French',
      image: require('../../assets/images/french.png'),
    },
    {
      id: 2,
      name: 'Romantic',
      image: require('../../assets/images/romantic.png'),
    },
    {
      id: 3,
      name: 'Italian',
      image: require('../../assets/images/italian.png'),
    },
    {
      id: 4,
      name: 'Date',
      image: require('../../assets/images/date.png'),
    },
  ]

  const shadowColors = [
    'blue',
    'red',
    'yellow',
    'pink',
  ]

  // renderItem = ({item, index}) => {
  //   if (index === 0) return <ListItem style={styles.firstItem} data={item} />
  //   else if (index === (this.state.data.length -1)) return <ListItem style={styles.lastItem} data={item} />
  //   else return <ListItem style={styles.item} data={item} />
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button 
        title="Test" 
        onPress={()=>console.log(restaurants)}>TEST
      </Button> */}
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}

        containerStyle={{
          backgroundColor: 'transparent',
        }}
        inputContainerStyle={{
          backgroundColor: '#DDE1E4',
        }}
        inputStyle={{
          color: 'black',
        }}
        placeholderTextColor={'#g5g5g5'}
        lightTheme={true}
        round={true}
        cancelIcon={true}
        showCancel={true}
        // showLoading={true}
      />
      
      {restaurants === null && (
        <View>
        <Text style={styles.groupsTitle}>Groups</Text>
        <View style={{alignContent:"center"}}>
              <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="horizontalScrollView"
                  contentContainerStyle={styles.shows_horizontal_scrollView}
              >
                {/* TODO SEARCH IF API FOR IT IS DONE */}
               
                  <FlatList
                      contentContainerStyle={{alignSelf: 'flex-start'}}
                      numColumns={2}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      data={categories}
                      renderItem={({ item, index }) => (
                        <View>
                          <View style={[styles.imageContainer, {shadowColor: shadowColors[index%shadowColors.length]}]}>
                            <Pressable style={styles.touchable} >
                                <Image 
                                  source={item.image}
                                  style={styles.image}
                                />
                            </Pressable>
                          </View>
                          <Text style={styles.text}>{item.name}</Text>
                        </View>
                      )}
                      keyExtractor={(item) => item.id}
                  />
               
            </ScrollView>
            </View>
          </View>
          )}
      {restaurants !== null && (
              <Text>No restaurants available</Text>
        )
      }
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginHorizontal: 20,
  },

  groupsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  imageContainer:{
    width: windowWidth/2.35,
    height: windowHeight/7,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 10,
    elevation: 6,
  },
  image: {
    flex: 1,
    width: windowWidth/2.35,
    height: windowHeight/7,
    borderRadius: 10,
    // resizeMode: 'contain',
  },
  text:{
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 7,
    // alignSelf: 'center',
  }
  
});

export default Page