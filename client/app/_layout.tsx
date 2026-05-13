import { Stack } from 'expo-router';
import "../global.css"
import 'react-native-reanimated';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {

  return (
    <QueryClientProvider client={queryClient}>
    <Stack
        screenOptions={{ 
          headerShown: false,
          contentStyle:{
            backgroundColor: "#000000",
          }
         }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="(root)" />
    </Stack>
    </QueryClientProvider>
  );
}