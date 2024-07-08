import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
    flex: 1.3,
    height: height / 3,
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
});

export default style;
