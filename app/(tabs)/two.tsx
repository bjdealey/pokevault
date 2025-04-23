// This screen represents "Tab Two" in the bottom tab navigation.
// It uses Expo Router's Stack for screen options and Tamagui's ScreenContent for consistent layout.

import { Stack } from 'expo-router'; // Handles screen configuration and headers
import { StyleSheet, View } from 'react-native'; // Provides core layout components and styles

import { ScreenContent } from '~/components/ScreenContent'; // Custom Tamagui component for consistent content layout

export default function Home() {
  return (
    <>
      {/* Set screen title in the navigation header */}
      <Stack.Screen options={{ title: 'Tab Two' }} />
      {/* Outer container for screen layout */}
      <View style={styles.container}>
        {/* Displays the content and title using Tamagui styling */}
        <ScreenContent path="app/(tabs)/two.tsx" title="Tab Two" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the available space
    padding: 24, // Adds consistent padding around content
  },
});
