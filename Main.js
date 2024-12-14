import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Animated, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Mainstyles';


const FadeView = props => {
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
      style={{...props.style, opacity: fadeAnim,}}>
      {props.children}
      </Animated.View>
    );
  };


const Main = () => {
  const navigation = useNavigation();

  return (
    <FadeView style={styles.container}>
        <ImageBackground
        source={require('../assets/landingBG.png')} 
        style={styles.bgImage}
        blurRadius={1}
      />
      <FadeView style={styles.compHolder} /> 
        <View style={styles.logoContainer}>
            <Image
                source={require('../assets/Signin Logo Designs.png')} 
                style={styles.logo}
            />
        </View>
        <View style={styles.trademarkContainer}>
            <Text style={styles.trademark}>
                Syntax.sip
            </Text>
        </View>
        <View style={styles.welcomeContainer}>
            <Text 
            style={styles.welcomeText}
            >Welcome,</Text>
        </View>
        <View style={styles.descContainer}>
            <Text style={styles.description}>
            Indulge in our handcrafted brews, refreshing drinks, and delicious pastries.
            Whether you’re here for your daily coffee fix, a fresh pastry, or to explore our premium beans,
            we’ve got you covered. Let’s make your day a little more flavorful!
            </Text>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')} 
            >
                <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.signupBtnText}>Signup</Text>
            </TouchableOpacity>
        </View>
    </FadeView>
  );
};

export default Main;
