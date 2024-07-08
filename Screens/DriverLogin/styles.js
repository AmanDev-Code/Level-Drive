import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040505',
  },
  BackArrowView: {
    height: height / 16,
    flex: 0.3,
    justifyContent: 'center',
  },
  BackArrow: {
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    left: 10,
    top: 10,
  },
  LogoView: {
    flex: 2,
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    height: 140,
    width: 140,
  },
  LoginViewModule: {
    flex: 3,
    height: height / 3,
  },
  YellowImgView: {
    flex: 0.1,
    justifyContent: 'center',
  },
  YelloImg: {
    left: 15,
    height: 4,
    width: 30,
  },
  LoginContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 2,
    left: 15,
    width: width / 1.08,
  },
  TitleText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 26,
    paddingTop: 10,
  },
  DescriptionTitle: {
    fontWeight: '400',
    color: '#C7D6D6',
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'WorkSans-Regular',
  },
  EmailInput: {
    height: 63,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    fontFamily: 'WorkSans-Regular',
    lineHeight: 26,
  },
  PasswordInput: {
    height: 63,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    fontFamily: 'WorkSans-Regular',
    lineHeight: 26,
  },
  ForgotPassword: {
    fontSize: 18,
    fontStyle: 'normal',
    top: 10,
    color: '#556969',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    lineHeight: 28,
  },
  BottomTextView: {
    flex: 1,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  NoAccount: {
    textAlign: 'right',
    marginRight: 15,
    fontSize: 16,
    fontWeight: '400',
    color: '#C7D6D6',
    fontFamily: 'WorkSans-Regular',
    lineHeight: 28,
  },
  CreateOne: {
    textAlign: 'left',
    marginLeft: 15,
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#C7D6D6',
    fontWeight: '600',
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 28,
  },
  TouchableButtonCustom: {
    width: width,
    backgroundColor: '#2DAF95',
    height: 52.2,
    justifyContent: 'center',
  },
  TouchableButtonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C7D6D6',
    justifyContent: 'center',
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 26,
  },
});

export default LoginStyle;
