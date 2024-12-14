import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      flex: 1,
    },
    bgImage: {
      width: 450,
      height: 890,
      position: 'absolute',
      top: 0,
      left: 0,
      resizeMode: 'cover',
    },
    boxTopContainer: {
      width: 400,
      height: 1000,
      position: 'absolute',
      top: 245,
      left: 0,
      borderRadius: 35,
      backgroundColor: '#EEEEEE',
    },
    innerContainer: {
      top: -240,
    },
    logoContainer:{
      width: "100%",
      height: "100%",
      position: 'absolute',
      top: 240,
      left: 140,
    },
    logoImage: {
      height: 125,
      width: 125,
    },
    trademarkContainer:{
      width: "100%",
      height: "100%",
      top: 350,
      left: 145,
    },
    trademark: {
      fontFamily: 'FingerPaint_400Regular',
      fontSize: 18,
    },
    loginTextContainer:{
      position: 'absolute',
      top: 381,
      left: 127,
    },
    loginText: {
      fontSize: 16,
    },
    emailTextContainer:{
      position: 'absolute',
      top: 420,
      left: 32,
    },
    emailText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    inputEmailContainer:{
      position: 'absolute',
      top: 461,
      left: 27,
      backgroundColor: '#F8F4E1',
      width: 338,
      height: 52,
      borderRadius: 9,
    },
    inputEmail:{
      marginHorizontal: 15,
      marginVertical: 19,
    },
    passTextContainer:{
      position: 'absolute',
      top: 525,
      left: 32,
    },
    passText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    inputPassContainer:{
      position: 'absolute',
      top: 561,
      left: 27,
      backgroundColor: '#F8F4E1',
      width: 338,
      height: 52,
      borderRadius: 9,
    },
    inputPass:{
      marginHorizontal: 15,
      marginVertical: 19,
    },
    emailIconContainer:{
      position: 'absolute',
      top: 461,
      left: 320,
    },
    passIconContainer:{
      position: 'absolute',
      top: 561,
      left: 320,
    },
    loginBtnContainer:{
      position: 'absolute',
      top: 631,
      left: 27,
      width: 340,
      height: 100,
      elevation: 100,
    },
    loginBtn:{
      backgroundColor: '#96560B',
      padding: 13,
      borderRadius: 9,
      alignItems: 'center',
      elevation: 10,
    },
    loginBtnText:{
      color: '#fff',
      fontSize: 16, // Adjust the font size here
      fontWeight: 'bold',
    },
    connectSocialsContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: 700,
      left: 75,
    },
    connectSocial:{
      marginHorizontal: 15,
    },
    orTextContainer:{
      position: 'absolute',
      top: 770,
      left: 20,
    },
    signupBtnContainer:{
      position: 'absolute',
      top: 795,
      left: 27,
      width: 340,
      height: 100,
      elevation: 100,
    },
    signupBtn:{
      backgroundColor: '#EEEEEE',
      padding: 7,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: '#96560B',
      borderRadius: 9,
      alignItems: 'center',
    },
    signupBtnText:{
      color: '#96560B',
      fontSize: 16, // Adjust the font size here
      fontWeight: 'bold',
    },
  
  });

  export default styles;