import React from "react";
import { Tabs } from "expo-router/tabs";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

function Layout() {
  return (
    <BottomSheetModalProvider>
    <Tabs
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
      
        <Tabs.Screen
          name="Home"
          options={{
            href: "/main/Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
     
      <Tabs.Screen
        name="Browse"
        options={{
          href: "/main/Browse",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Reservations"
        options={{
          href: "/main/Reservations",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chair" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          href: "/main/Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
    </BottomSheetModalProvider>
  );
}

export default Layout;
