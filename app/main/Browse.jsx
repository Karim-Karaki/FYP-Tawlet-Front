import React, {useState} from 'react';
import { Text, View, StyleSheet, Pressable, Dimensions, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from '@rneui/themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = () => {

  const [ search, setSearch ] = useState("");

  updateSearch = (search) => {
    setSearch({ search });
  };

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
      <Text style={styles.groupsTitle}>Groups</Text>
      <View style={{alignContent:"center"}}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="horizontalScrollView"
                contentContainerStyle={styles.shows_horizontal_scrollView}
            >
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