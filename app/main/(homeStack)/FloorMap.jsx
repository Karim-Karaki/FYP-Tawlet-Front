import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Linking, Pressable  } from 'react-native';
import {Dimensions} from 'react-native';
import { restaurantConst, floorMap } from '../../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function FloorMap() {
    const restaurantSeats = ["table 1","table 2","table 3","table 4","table 5", "table 6"]
    const [ language, setLanguage ] = useState("");

    const tableData = [
        { label: 'Table 1', value: '1' },
        { label: 'Table 2', value: '2' },
        { label: 'Table 3', value: '3' },
        { label: 'Table 4', value: '4' },
        { label: 'Table 5', value: '5' },
        { label: 'Table 6', value: '6' },
      ];

    const dateData = [
        { label: '3/18/2024', value: '1' },
        { label: '3/19/2024', value: '2' },
        { label: '3/20/2024', value: '3' },
        { label: '3/21/2024', value: '4' },
        { label: '3/22/2024', value: '5' },
        { label: '3/23/2024', value: '6' },
    ];


    const timeData = [
        { label: 'Time slot 1', value: '1' },
        { label: 'Time slot 2', value: '2' },
        { label: 'Time slot 3', value: '3' },
        { label: 'Time slot 4', value: '4' },
        { label: 'Time slot 5', value: '5' },
        { label: 'Time slot 6', value: '6' },
    ];

    // LET USERS THEMSELVES INPUT DATE AND TIME?

    const inputTable = "Please select a table"
    const inputDate = "Please select a date"
    const inputTime = "Please select a time"

      const DropdownComponent = ({data, inputPhrase}) => {
        const [value, setValue] = useState(null);
    
        const renderItem = item => {
          return (
            <View style={styles.item}>
              <Text style={styles.textItem}>{item.label}</Text>
            </View>
          );
        };
        return (
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={inputPhrase}
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
              renderItem={renderItem}
            />
          );
        };


    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={floorMap}
                />
            <DropdownComponent data={tableData} inputPhrase={inputTable}/>
            <DropdownComponent data={dateData} inputPhrase={inputDate}/>
            <DropdownComponent data={timeData} inputPhrase={inputTime}/>
            <Pressable style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              alignItems: 'center',
              alignSelf: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 4,
              backgroundColor: 'green',
              height: 40,
              width: 80,
            }} 
             onPress={"this.loadInBrowser"}
             >
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    }}
                    >Reserve</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      icon: {
        marginRight: 5,
      },
      item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textItem: {
        flex: 1,
        fontSize: 16,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    image: {
        alignSelf: 'center',
        width: windowWidth*0.9,
        height: windowHeight/3,
        resizeMode: 'contain',
        marginTop: 30,
        marginBottom: 30,
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});