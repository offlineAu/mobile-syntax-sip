import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bgImage: {
    width: 450,
    height: 890,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover'
  },
  formContainer: {
    width: 400,
    height: 1000,
    position: 'absolute',
    top: 100,
    left: 0,
    borderRadius: 35,
    backgroundColor: '#EEEEEE',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40, // Space from top
    bottom: 50,
  },
  logoImage: {
    width: 125, // Increased width for a larger logo
    height: 125, // Increased height for a larger logo
  },
  trademark: {
    fontFamily: 'FingerPaint_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    bottom: 70,
  },
  signupText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#543310',
    marginVertical: 10,
    bottom: 60,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#543310',
    marginBottom: 20,
    bottom: 60,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    marginLeft: 20,
    bottom: 60,
  },
  input: {
    height: 40,
    backgroundColor: '#F8F4E1',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    bottom: 60,
  },
  button: {
    backgroundColor: '#96560B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 20,
    bottom: 60,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#96560B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    bottom: 60,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signinText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10,
    color: '#543310',
    bottom: 60,
  },
  connectSocialsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    bottom: 60,
  },
  connectSocial: {
    width: 40,
    height: 40,
  },
});

export default styles;
