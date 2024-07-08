import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import * as Progress from 'react-native-progress';

import Resetstyle from './Resetstyle';
const { width, height } = Dimensions.get('window');


const ResetScreen = () => {
  const [mobile, onChangeMobile] = useState('');
  const [Swap, onChangeSwap] = React.useState(true);
  const [otp, setotp] = useState("");
  useEffect(() => {

    return () => {
      if (otp.length == 3) {
        setotp("")
      }
    }
  }, [otp])
  const isCompany = () => {
    onChangeSwap(false);
  };

  const isOwner = () => {
    onChangeSwap(true);
  };




  return (
    <View style={Resetstyle.container}>
      <View style={Resetstyle.toppart}>
        <Pressable style={Resetstyle.backicon} onPress={isOwner}>
          <Icon
            name="md-arrow-back"
            style={{
              color: 'rgba(255,255,255,1)',
              fontSize: 30,
              left: 10,
            }}></Icon>
        </Pressable>
        <View style={Resetstyle.signupContainer}>
          <Text style={Resetstyle.signup}>Reset Password</Text>
        </View>
      </View>
      <View style={Resetstyle.logocont}>
        <Image
          source={require('../../../Assets/logo.png')}
          style={{
            height: 90,
            width: 84,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flex: 3,
          height: height / 3,
        }}>
        <View
          style={{
            flex: 0.04,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../Assets/rectange_yellow.png')}
            style={{
              left: 15,
              height: 4,
              width: 30,
            }}
          />
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1.5,
              left: 15,
              width: width - 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: width / 1.08,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Pressable>
                <Text style={Resetstyle.ownercompanyinfo}>
                  Reset Password
                </Text>
              </Pressable>
            </View>
            {Swap ?
              (<View style={Resetstyle.ResetPassWordTxtInputView}>
                <View>
                  <FloatingLabelInput
                    label="Mobile number"
                    value={mobile}
                    maskType={'phone'}
                    maxLength={13}
                    containerStyles={{
                      borderWidth: 1,
                      padding: 5,
                      borderColor: '#2DAF95',
                      borderRadius: 5,
                    }}
                    customLabelStyles={{
                      colorBlurred: '#2DAF95',
                      fontSizeFocused: 12,
                    }}
                    labelStyles={{ color: 'red' }}
                    inputStyles={{
                      color: '#C8FFF5',
                      paddingHorizontal: 10,
                    }}
                    onChangeText={value => onChangeMobile(value)}
                  />
                </View>
              </View>)
              : (
                <>
                  <View style={{ height: height / 15, justifyContent: 'center' }}>
                    <Text style={{ color: '#C7D6D6', fontSize: 16, fontWeight: '400', fontFamily: 'WorkSans-Regular', lineHeight: 28 }}>Enter the 4-digit code we sent to you</Text>
                  </View>
                  <View style={{ width: width / 3.5, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'WorkSans-Bold', fontWeight: '600', fontSize: 22, lineHeight: 26, color: '#C7D6D6' }}>9832 5426</Text>
                  </View>
                  <OTPInputView
                    style={{ width: width - 30, height: height / 7, justifyContent: 'space-between', alignSelf: 'center', alignContent: 'center' }}
                    pinCount={4}
                    code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    onCodeChanged={code => setotp(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={Resetstyle.underlineStyleBase}

                    onCodeFilled={(code => { alert(code) })}
                    // clearInputs={true}

                    secureTextEntry={true}
                    selectionColor={'#2DAF95'}


                  />

                </>
              )}

          </View>

        </ScrollView>
        {Swap ? <TouchableOpacity
          style={{
            width: width,
            backgroundColor: '#2DAF95',
            height: 52.2,
            justifyContent: 'center',
          }}
          activeOpacity={0.7}>
          <Pressable onPress={isCompany}>
            <Text style={Resetstyle.next} >Next</Text>
          </Pressable>
        </TouchableOpacity> :
          <View>
            <TouchableOpacity
              style={{
                width: width,
                backgroundColor: '#2DAF95',
                height: 52.2,
                justifyContent: 'center',
              }}
              activeOpacity={0.7}>
              <Pressable onPress={isOwner}>
                <Text style={Resetstyle.next} >Next</Text>
              </Pressable>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
              <Text style={{ justifyContent: 'flex-end', color: '#556969', fontWeight: '600', fontSize: 14, lineHeight: 17.6, }}>Did you don’t get code?</Text>
              <Text style={{ justifyContent: 'flex-start', paddingLeft: 10, color: '#2DAF95', fontWeight: '700', fontSize: 14, lineHeight: 17.6, }}>Resend</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
              <Progress.Bar progress={0.4} width={width-50} style={{margin: 5, borderColor: 'none'}} color={'rgb(243,52,52)'} unfilledColor={'#535353'} borderColor={'none'} animated={true} indeterminate={false} />
            </View>
          </View>

        }



      </View>
    </View>
  );
};

export default ResetScreen;
