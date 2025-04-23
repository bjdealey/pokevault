// This screen is shown when a user navigates to a route that doesn't exist.
// It displays an error message and a link to return to the home screen.

import { Link, Stack } from 'expo-router'; // For navigation and screen header config
import { YStack } from 'tamagui'; // Vertical layout stack component from Tamagui

// Custom styled components defined in your Tamagui config
import { Container, Main, Subtitle, Title } from '../tamagui.config';

export default function NotFoundScreen() {
  return (
    <Container>
      {' '}
      {/* Provides consistent outer spacing/layout */}
      <Stack.Screen options={{ title: 'Oops!' }} /> {/* Sets the screen title in the header */}
      <Main>
        {' '}
        {/* Main content container */}
        <YStack>
          {' '}
          {/* Vertical stack to layout elements vertically */}
          <Title>This screen doesn't exist.</Title> {/* Displayed error message */}
          <Link href="/">
            {' '}
            {/* Navigates back to the home screen */}
            <Subtitle>Go to home screen!</Subtitle>
          </Link>
        </YStack>
      </Main>
    </Container>
  );
}
