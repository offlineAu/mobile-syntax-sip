import {
  Image,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  Animated,
  PanResponder,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import styles from './Loginstyles';
import { useNavigation } from '@react-navigation/native';

const FadeView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{ ...props.style, opacity: fadeAnim }}
    >
      {props.children}
    </Animated.View>
  );
};

const Login = () => {
  const onPressButton = () => {
    Alert.alert('Button Pressed!');
  };

  // Pan animation for dragging
  const pan = useRef(new Animated.ValueXY()).current;

  // Opacity animation for the entire content below the boxTopContainer
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 0 })}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <FadeView style={styles.container}>
            <ImageBackground
              source={require("../assets/image 2.png")}
              style={styles.bgImage}
              resizeMode="cover"
              blurRadius={3}
            >
              {/* Drag-enabled boxTopContainer */}
              <Animated.View
                {...panResponder.panHandlers}
                style={[
                  styles.boxTopContainer,
                  {
                    transform: [{ translateY: pan.y }], // Vertical dragging
                  },
                ]}
              >
                <Animated.View
                style={{
                  opacity: contentOpacity, 
                }}
              >
                <View style={styles.innerContainer}>
                <View style={styles.trademarkContainer}>
                  <Text style={styles.trademark}>Syntax.sip</Text>
                </View>
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../assets/Logo.png")}
                    style={styles.logoImage}
                  />
                </View>
                <View style={styles.loginTextContainer}>
                  <Text style={styles.loginText}>Login to your account</Text>
                </View>
                <View style={styles.emailTextContainer}>
                  <Text style={styles.emailText}>Email Address</Text>
                </View>
                <View style={styles.inputEmailContainer}>
                  <TextInput
                    style={styles.inputEmail}
                    placeholder="Enter your Email Address"
                  />
                </View>
                <View style={styles.emailIconContainer}>
                  <Image
                    source={require("../assets/email-Icon.png")}
                    style={styles.emailIcon}
                  />
                </View>
                <View style={styles.passTextContainer}>
                  <Text style={styles.passText}>Password</Text>
                </View>
                <View style={styles.inputPassContainer}>
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Enter your Password"
                    secureTextEntry
                  />
                </View>
                <View style={styles.passIconContainer}>
                  <Image
                    source={require("../assets/pass-Icon.png")}
                    style={styles.passIcon}
                  />
                </View>
                <View style={styles.loginBtnContainer}>
                  <TouchableOpacity style={styles.loginBtn} onPress={onPressButton}>
                    <Text style={styles.loginBtnText}>Login</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.connectSocialsContainer}>
                  <Image
                    source={require("../assets/google-Icon.png")}
                    style={styles.connectSocial}
                  />
                  <Image
                    source={require("../assets/fb-Icon.png")}
                    style={styles.connectSocial}
                  />
                  <Image
                    source={require("../assets/apple-Icon.png")}
                    style={styles.connectSocial}
                  />
                </View>
                <View style={styles.orTextContainer}>
                  <Image
                    source={require("../assets/or-Text.png")}
                    style={styles.orText}
                  />
                </View>
                <View style={styles.signupBtnContainer}>
                  <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.signupBtnText}>Signup</Text>
                  </TouchableOpacity>
                </View>
                </View>
              </Animated.View>
              </Animated.View>
            </ImageBackground>
          </FadeView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
