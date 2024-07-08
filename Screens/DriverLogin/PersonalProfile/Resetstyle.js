import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Resetstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    height: height,
    width: width,
  },
  toppart: {
    height: height / 10,
    flexDirection: 'row',
  },
  signup: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'WorkSans-SemiBold',
    lineHeight: 26,
  },
  backicon: {
    flex: 1.1,
    justifyContent: 'center',
  },
  signupContainer: {
    flex: 9,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  logocont: {
    flex: 0.5,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ownercompanyinfo: {
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#fff',
    lineHeight: 26,
    fontFamily: 'WorkSans-SemiBold',
    paddingTop: 15,
  },
  ResetPassWordTxtInputView: {
    height: height/4.5, 
    justifyContent: 'center', 
    alignContent: 'center'
  },
  haveid: {
    textAlign: 'right',
    fontSize: 16,
    color: '#2DAF95',
    fontWeight: '400',
    fontFamily: 'WorkSans-Regular',
    lineHeight: 28,
  },
  signin: {
    textAlign: 'left',
    marginLeft: 15,
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#2DAF95',
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: 'WorkSans-SemiBold',
  },
  next: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#C7D6D6',
    justifyContent: 'center',
    fontFamily: 'WorkSans-SemiBold',
    marginTop: 'auto',
  },
  underlineStyleBase: {
    width: 68,
    height: 68,
    borderRadius: 10,
    borderColor: '#2DAF95',
    borderWidth: 1,
    fontWeight: '700',
    color: '#C7D6D6',
    fontSize: 22,
    fontFamily: 'WorkSans-SemiBold',
    
    
},

});

export default Resetstyle;
