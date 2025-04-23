// This screen is the main tab (Tab One) in the bottom tab navigation.
// It sets the screen title and renders the ScreenContent component from Tamagui for consistent UI.

import { Stack } from 'expo-router'; // Used to set screen options like the title
import { StyleSheet, View } from 'react-native'; // Core layout container and styling

import { ScreenContent } from '~/components/ScreenContent'; // Tamagui-based component for consistent content structure

export default function Home() {
  return (
    <>
      {/* Set the screen's title in the header */}
      <Stack.Screen options={{ title: 'Tab One' }} />
      {/* Wrap the content in a styled container */}
      <View style={styles.container}>
        {/* Render a reusable screen content layout with path and title */}
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the available vertical space
    padding: 24, // Add consistent padding inside the screen
  },
});
