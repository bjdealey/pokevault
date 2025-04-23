// This file defines the bottom tab layout for the app using Expo Router.
// It includes two tabs ("Tab One" and "Tab Two") and sets icons and screen-specific options.
// It also adds a header button on the first tab that links to the modal screen.

import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton'; // Custom header button component
import { TabBarIcon } from '../../components/TabBarIcon'; // Icon component for tab bar icons

export default function TabLayout() {
  return (
    // Define the layout with two tabs
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black', // Set the active tab color
      }}>
      {/* First tab screen: index */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One', // Displayed title in the tab bar
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, // Icon for this tab
          headerRight: () => (
            // Add a button to the header that links to the modal screen
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      {/* Second tab screen: two */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two', // Displayed title in the tab bar
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, // Icon for this tab
        }}
      />
    </Tabs>
  );
}
