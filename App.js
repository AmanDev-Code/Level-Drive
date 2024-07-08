import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, Dimensions, StatusBar, Image, ScrollView, SafeAreaView } from 'react-native'
import ComapnyProfile from './Screens/Authentication Flow/Company Profile/ComapnyProfile.js'
import Login from './Screens/Authentication Flow/Login/Login.js'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import JobandTask from './Screens/Jobs and Tasks/JobandTask.js';
import Menu from './Screens/Menu/Menu.js';
import MyDrivers from './Screens/MyDrivers/MyDrivers.js';
import Notification from './Screens/Notification/Notification.js';
import Chat from './Screens/Chat/Chat.js';
import Driver from './Screens/DriverLogin/index.js';
import PersonalProfile from './Screens/DriverLogin/PersonalProfile/index.js';

import ResetScreen from './Screens/DriverLogin/PersonalProfile/ResetScreen.js';
// import Otp from './Screens/DriverLogin/PersonalProfile/Otp.js';



const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <Drawer.Navigator initialRouteName='Level'
      screenOptions={{
        drawerStyle: {
          drawerHideStatusBarOnOpen: 'false',
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#121212',
          width: width - 100,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          drawerHideStatusBarOnOpen: 'true',
          headerShown: 'false',

        },
        drawerLabelStyle: {
          color: '#2DAF95',
          fontSize: 16,
          lineHeight: 26,
          margin: 10
        }
      }}
      // drawerContent={(props) => {
      //   return (
      //     <SafeAreaView style={{ flex: 1 }}>
      //       <ScrollView>
      //         <Image
      //           source={require("./Assets/logo.png")}
      //           width={20}
      //           height={20}
      //         />
      //       </ScrollView>
      //     </SafeAreaView>
      //   )
      // }}


    >

      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="CompanyProfile" component={ComapnyProfile} />
      <Drawer.Screen name="My Jobs" component={JobandTask} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="MyDrivers" component={MyDrivers} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="Driver" component={Driver} />
      <Drawer.Screen name="PersonalProfile" component={PersonalProfile} />
      <Drawer.Screen name="ResetScreen" component={ResetScreen} />
    </Drawer.Navigator >
  );
}

const App = () => {
  return (
    <NavigationContainer  >
      <StatusBar hidden={true} />
      <MyDrawer />
    </NavigationContainer>

    // <JobandTask/>

  )
}

export default App
