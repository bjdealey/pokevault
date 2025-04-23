// This file defines the Modal screen in the Expo Router navigation stack.
// It uses Tamagui's ScreenContent component for consistent layout styling.

import { StatusBar } from 'expo-status-bar'; // Handles the status bar styling for iOS and Android
import { Platform } from 'react-native'; // Detects if the app is running on iOS or Android

import { ScreenContent } from '~/components/ScreenContent'; // Custom Tamagui-based layout component

export default function Modal() {
  return (
    <>
      {/* Renders the screen content with title and path for layout and display */}
      <ScreenContent path="app/modal.tsx" title="Modal" />

      {/* Sets the status bar style: light on iOS, automatic on others */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
