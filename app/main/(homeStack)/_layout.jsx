import React from "react";
import { Stack } from "expo-router/stack";
import {colors} from "../../../constants/constants.js";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Home from "./Home";

function Layout() {
  return (
    <BottomSheetModalProvider>
    <Stack
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      
        <Stack.Screen
          name="Home"
          options={{
            href: "/main/Home",
          }
        }
          // component={Home}
        />
        <Stack.Screen
          name="(modals)/location-search"
          options={{
            href: "./(modals)/location-search",
          }}
        />
        {/* TODO FIX NAVIGATION TO RESTAURANT PAGE AND CHANGE LOCATION */}
        <Stack.Screen
        name="Restaurant"
        options={{ 
          // route }) => ({ title: route.params.name })
          href: "/main/RestaurantPage",}}
        />
        <Stack.Screen
        name="FloorMap"
        options={{ 
          // route }) => ({ title: route.params.name })
          href: "/main/FloorMap",}}
        />
     
    </Stack>
    </BottomSheetModalProvider>
  );
}

export default Layout;
