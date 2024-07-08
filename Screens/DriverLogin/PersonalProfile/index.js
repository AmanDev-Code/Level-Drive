import React, { useState } from 'react';
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

import style from './style';
import ResetScreen from './ResetScreen.js';
const { width, height } = Dimensions.get('window');

const PersonalProfile = () => {
  const [text, onChangeText] = useState('');
  const [Pass, onChangePass] = useState('');
  const [mobile, onChangeMobile] = useState('');
  const [email, onChangeEmail] = useState('');

  return (
    <View style={style.container}>
      <View style={style.toppart}>
        <Pressable style={style.backicon}>
          <Icon
            name="md-arrow-back"
            style={{
              color: 'rgba(255,255,255,1)',
              fontSize: 30,
              left: 10,
            }}></Icon>
        </Pressable>
        <View style={style.signupContainer}>
          <Text style={style.signup}>Sign Up</Text>
        </View>
      </View>
      <View style={style.logocont}>
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
          flex: 2.4,
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
                <Text style={style.ownercompanyinfo}>
                  Personal Info
                </Text>
              </Pressable>
            </View>

            <View>
              <View style={{ marginVertical: 20 }}>
                <FloatingLabelInput
                  label="Full name"
                  value={text}
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
                  onChangeText={value => onChangeText(value)}
                />
                <FloatingLabelInput
                  label="Mobile number"
                  value={mobile}
                  containerStyles={{
                    borderWidth: 1,
                    padding: 5,
                    borderColor: '#2DAF95',
                    borderRadius: 5,
                    marginTop: 10,
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
                <FloatingLabelInput
                  label="Email ID"
                  value={email}
                  containerStyles={{
                    borderWidth: 1,
                    padding: 5,
                    borderColor: '#2DAF95',
                    borderRadius: 5,
                    marginTop: 10,
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
                  onChangeText={value => onChangeEmail(value)}
                />
                <FloatingLabelInput
                  label="Password"
                  value={Pass}
                  isPassword={true}
                  containerStyles={{
                    borderWidth: 1,
                    padding: 5,
                    borderColor: '#2DAF95',
                    borderRadius: 5,
                    marginTop: 10,
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
                  onChangeText={value => onChangePass(value)}
                />
              </View>

              <View
                style={{
                  marginVertical: 25,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{ flex: 1.2, justifyContent: 'center' }}>
                  <Text style={style.haveid}>Already have ID?</Text>
                </View>
                <Pressable style={{ flex: 1 }}>
                  <Text style={style.signin}>Sign in</Text>
                </Pressable>
              </View>
            </View>

          </View>

        </ScrollView>
        <TouchableOpacity
          style={{
            width: width,
            backgroundColor: '#2DAF95',
            height: 52.2,
            justifyContent: 'center',
          }}
          activeOpacity={0.7}>
          <Pressable>
            <Text style={style.next}>Next</Text>
          </Pressable>

        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalProfile;
