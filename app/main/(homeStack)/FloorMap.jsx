import React from 'react';
import { View, Text, Image, StyleSheet, Linking, Pressable  } from 'react-native';
import {Dimensions} from 'react-native';
import { restaurantConst, floorMap } from '../../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
// const  {width, height} = Image.getSize(floorMap, (width, height) => {this.setState({width, height})});
const restaurantSeats = ["table 1","table 2","table 3","table 4","table 5"]

export default function FloorMap() {
    return (
        <View style>
            <Image 
                style={styles.image}
                source={floorMap}
                />
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    restaurantSeats.map((table) => {
                        return (
                            <Text >{table}</Text>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        alignSelf: 'center',
        width: windowWidth*0.9,
        height: windowHeight/3,
        resizeMode: 'contain',
        marginTop: 30,
    },
});

// export default function FloorMap() {
//     return (
//         <View style={styles.container}>
//             <Image
//                 style={styles.image}
//                 source={require('../path/to/your/image.png')}
//             />
//         </View>
//     );
// }