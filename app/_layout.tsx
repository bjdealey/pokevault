// This file sets up the root layout for the app using Expo Router and Tamagui.
// It loads custom fonts, configures the Tamagui UI provider, and sets up screen navigation.

import { useFonts } from 'expo-font'; // For loading custom fonts
import { SplashScreen, Stack } from 'expo-router'; // Splash screen handling and navigation stack
import React, { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui'; // Provides theme and styling support via Tamagui

import config from '../tamagui.config'; // Custom Tamagui configuration

SplashScreen.preventAutoHideAsync(); // Prevents splash screen from hiding automatically until fonts are loaded

export const unstable_settings = {
  // Sets the initial route to the tab layout and ensures back navigation from modals works
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  // Load Inter fonts for consistent typography across the app
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Don't render anything until fonts are loaded
  if (!loaded) return null;

  return (
    // TamaguiProvider wraps the app to apply theme and styling
    <TamaguiProvider config={config}>
      <Stack>
        {/* Default layout screen with tab navigation, header hidden */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Modal screen with custom presentation style */}
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </TamaguiProvider>
  );
}
