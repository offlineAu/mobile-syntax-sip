import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, Image, ImageBackground, Animated, PanResponder } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './Signupstyles';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Format the selected date for display
  const formattedDob = dob
    ? `${dob.getDate()}/${dob.getMonth() + 1}/${dob.getFullYear()}`
    : 'Select Date';

  // Handle date change and hide the date picker after selection
  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDob(selectedDate); // Set the selected date
    }
    setShowDatePicker(false); // Hide the picker after date is selected
  };

  const handleSubmit = () => {
    if (!fullName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Show success message
    Alert.alert('Success', 'Successfully Registered!');
  };

  const pan = useRef(new Animated.ValueXY()).current;
  const contentOpacity = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Only move vertically (dy)
        Animated.event([null, { dy: pan.y }], {
          useNativeDriver: false, // Can't use native driver for gesture updates
        })(e, gestureState);

        // Calculate opacity based on drag distance (dy)
        const dragDistance = Math.abs(gestureState.dy);
        const newOpacity = 1 - dragDistance / 300; // Adjust 300 to control when opacity fades out fully
        contentOpacity.setValue(newOpacity);
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 150) {
          // Go back if dragged down far enough
          navigation.goBack();
        } else {
          // Spring back to original position if not dragged enough
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();

          // Reset opacity to 1
          Animated.timing(contentOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <ImageBackground
      source={require('../assets/image 2.png')}
      style={styles.bgImage}
      resizeMode="cover"
      blurRadius={3}
    >
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.formContainer, { transform: [{ translateY: pan.y }], opacity: contentOpacity }]}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.trademark}>Syntax.sip</Text>
        <Text style={styles.signupText}>Signup</Text>
        <Text style={styles.headerText}>Create your account</Text>

        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.button}>
          <Text style={styles.buttonText}>{formattedDob}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={dob}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Email Address:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Sign in with text */}
        <Text style={styles.signinText}>Sign in with</Text>

        {/* Social Media Connect Icons */}
        <View style={styles.connectSocialsContainer}>
          <Image
            source={require('../assets/google-Icon.png')}
            style={styles.connectSocial}
          />
          <Image
            source={require('../assets/fb-Icon.png')}
            style={styles.connectSocial}
          />
          <Image
            source={require('../assets/apple-Icon.png')}
            style={styles.connectSocial}
          />
        </View>
      </Animated.View>
    </ImageBackground>
  );
}
