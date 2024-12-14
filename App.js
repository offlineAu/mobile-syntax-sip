import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, ActivityIndicator } from 'react-native'; // ActivityIndicator for loading spinner
import { useFonts, FingerPaint_400Regular } from '@expo-google-fonts/finger-paint'; // Import Google font
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Login from './loginSignupScreen/Login';
import Main from './loginSignupScreen/Main';
import Signup from './loginSignupScreen/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load fonts
  let [fontsLoaded] = useFonts({
    FingerPaint_400Regular,
    Inter_400Regular, Inter_700Bold,
  });

  // Show a loading screen if fonts aren't loaded yet
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
