import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginStyle from './styles';

const Driver = () => {
  const navigation = useNavigation();
  const [Title, setTitle] = useState('Login');
  const [text, onChangeText] = useState('');
  const [Pass, onChangePass] = useState('');

  const backtoLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const onCreateOnepressed = () => {
    navigation.navigate('CreateCompanyLogin');
  };

  const onLoginPressed = () => {
    navigation.navigate('Home', {screen: 'HomeScreen'});
  };

  return (
    <View style={LoginStyle.container}>
      <Pressable style={LoginStyle.BackArrowView} onPress={backtoLogin}>
        <Icon name="md-arrow-back" style={LoginStyle.BackArrow}></Icon>
      </Pressable>
      <View style={LoginStyle.LogoView}>
        <Image
          source={require('../../Assets/logo.png')}
          style={LoginStyle.Logo}
        />
      </View>

      <View style={LoginStyle.LoginViewModule}>
        <View style={LoginStyle.YellowImgView}>
          <Image
            source={require('../../Assets/rectange_yellow.png')}
            style={LoginStyle.YelloImg}
          />
        </View>

        <View style={LoginStyle.LoginContainer}>
          <Text style={LoginStyle.TitleText}>{Title}</Text>
          <Text style={LoginStyle.DescriptionTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>
          <View style={{top: 20}}>
            <TextInput
              style={LoginStyle.EmailInput}
              onChangeText={onChangeText}
              value={text}
              placeholder="Email ID"
              backgroundColor="#07201B"
              keyboardType="email-address"
              placeholderTextColor="#fff"
            />
            <TextInput
              style={LoginStyle.PasswordInput}
              onChangeText={onChangePass}
              value={Pass}
              placeholder="Password"
              secureTextEntry={true}
              keyboardType="default"
              backgroundColor="#07201B"
              placeholderTextColor="#fff"
            />
            <View>
              <Text style={LoginStyle.ForgotPassword}>Forgot password?</Text>
            </View>
          </View>
          <View style={LoginStyle.BottomTextView}>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={LoginStyle.NoAccount}>No account?</Text>
            </View>
            <Pressable style={{flex: 1}} onPress={onCreateOnepressed}>
              <Text style={LoginStyle.CreateOne}>Create one.</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={LoginStyle.TouchableButtonCustom}
        activeOpacity={0.7}
        onPress={onLoginPressed}>
        <Text style={LoginStyle.TouchableButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Driver;
