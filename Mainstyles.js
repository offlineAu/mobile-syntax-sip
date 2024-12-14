import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8F4E01',
    height: 550,
    width: 350,
    borderRadius: 50,
    top: 300,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#E68D53',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  logo: {
    width: 130,
    height: 130,
    left: -3,
  },
  logoContainer: {
    top: -320,
    borderTopWidth: 2,
    borderBottomtWidth: 2,
    borderRightWidth: 2,
    borderColor: '#E68D53',
    borderRadius: 100,
    height: 130,
    width: 130,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#8F4E01',
  },
  trademark: {
    fontFamily: 'FingerPaint_400Regular',
    color: 'black',
    fontSize: 24,
  },
  trademarkContainer: {
    top: -310,
  },
  welcomeText: {
    fontFamily: 'FingerPaint_400Regular',
    color: '#FFF1E4',
    fontSize: 36,
  },
  welcomeContainer: {
    maxWidth: 200,
    left: -65,
    top: -290,
  },
  description: {
    fontFamily: 'Inter_700Bold',
    color: '#FFF1E4',
    fontSize: 15,
    maxWidth: 300,
    letterSpacing: 1,
  },
  descContainer: {
    top: -280,
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOpacity: 0.8,
  },
  signupButton: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOpacity: 0.8,
  },
  loginBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  signupBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  btnContainer: {
    top: -250,
  },
});

export default styles;
