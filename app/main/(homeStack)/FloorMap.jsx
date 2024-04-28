import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Linking, Pressable, Button, Alert  } from 'react-native';
import {Dimensions} from 'react-native';
import { restaurantConst, floorMap } from '../../../constants/constants';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-element-dropdown';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

export default function FloorMap() {

  // const [selectedTime, setSelectedTime] = useState(null);

  // // API call to get the reservations available
  // const getTableByPostingTime = async (data) => {
  //   try {
  //     const response = await fetch(`${API_URL}/table/available`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.error('Error:', error);
  //     throw error;
  //   }
  // };

  // // Code to handle the selection of the time
  // const handleTimeSelection = async (time) => {
  //   try {
  //     const requestBody = {
  //       restaurantId: "65f97571b3fd57e0111d8829",
  //       date: "2024-05-18",
  //       timeSlot: "9:00 PM",
  //     };

  //     const result = await getTableByPostingTime(requestBody);
  //     console.log("Available tables:", result);
  //     // Handle the result as needed
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //     // Handle error
  //   }
  // };
    const creatReservationSuccesAlert = () =>
    Alert.alert('Sucess', 'Your table has been successfully reserved', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    const dateData = [
        { label: '3/18/2024', value: '1' },
        { label: '3/19/2024', value: '2' },
        { label: '3/20/2024', value: '3' },
        { label: '3/21/2024', value: '4' },
        { label: '3/22/2024', value: '5' },
        { label: '3/23/2024', value: '6' },
    ];

    // "8:00 AM",
    // "10:00 AM",
    // "12:00 PM",
    // "2:00 PM",
    // "4:00 PM",
    // "6:00 PM",
    // "8:00 PM",
    // "10:00 PM",
    const timeData = [
        { label: '8:00 AM', value: '1' },
        { label: '10:00 AM', value: '2' },
        { label: '12:00 PM', value: '3' },
        { label: '2:00 PM', value: '4' },
        { label: '4:00 PM', value: '5' },
        { label: '6:00 PM', value: '6' },
        { label: "8:00 PM", value: '7' },
        { label: "10:00 PM", value: '8' },
    ];

    const numberOfGuestsData = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
    ]


    const tableData = [
        { label: 'Table slot 1', value: '1' },
        { label: 'Table slot 2', value: '2' },
        { label: 'Table slot 3', value: '3' },
        { label: 'Table slot 4', value: '4' },
        { label: 'Table slot 5', value: '5' },
        { label: 'Table slot 6', value: '6' },
    ]

    // const route = useRoute();
    // // const {openingHours} = route.params;
    // const openingHours = "10:00-22:00";

    // // Parse the opening hours string into start and end times
    // const [startTime, endTime] = openingHours.split("-");

    // // Parse the start time into hours and minutes
    // const [startHour, startMinute] = startTime.split(":").map(Number);

    // // Increment the start hour by 1 and ensure it stays within 24-hour format
    // let newStartHour = (startHour ) % 24;

    // // Format the start time back into HH:MM format
    // const newStartTime = `${newStartHour.toString().padStart(2, '0')}:${startMinute}`;

    // // Parse the end time into hours and minutes
    // const [endHour, endMinute] = endTime.split(":").map(Number);

    // // Increment the end hour by 1 and ensure it stays within 24-hour format
    // let newEndHour = (endHour ) % 24;

    // // Format the end time back into HH:MM format
    // const newEndTime = `${newEndHour.toString().padStart(2, '0')}:${endMinute}`;

    // // Generate the array of incremented opening hours
    // const incrementedOpeningHours = [];
    // for (let hour = newStartHour; hour <= newEndHour; hour++) {
    //   incrementedOpeningHours.push(`${hour.toString().padStart(2, '0')}:${startMinute}`);
    // }

    // incrementedOpeningHours now contains all the incremented opening hours
    // console.log(incrementedOpeningHours);

    // const timeData = [];
    // for (let i = 0; i < incrementedOpeningHours.length; i++) {
    // timeData.push({ label: incrementedOpeningHours[i], value: i });
    // }


    // LET USERS THEMSELVES INPUT DATE AND TIME?

    const inputTable = "Please select a table"
    const inputDate = "Please select a date"
    const inputTime = "Please select a time"
    const inputGuests = "Please select number of guests"

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
            {/* <Button 
              title="Test" 
              onPress={()=>console.log(timeData)}>TEST
            </Button> */}

            <Image 
                style={styles.image}
                source={floorMap}
                />
            <DropdownComponent data={dateData} inputPhrase={inputDate}/>
            <DropdownComponent data={timeData} inputPhrase={inputTime}
              // onSelect={(value) => handleTimeSelection(value)}
            />

            <DropdownComponent data={numberOfGuestsData} inputPhrase={inputGuests} />

            {/* Need to get available tables for this time according to Karaki API */}
            <DropdownComponent data={tableData} inputPhrase={inputTable} />
            
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
             onPress={() => creatReservationSuccesAlert()}
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