import React from 'react'

import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign"
import { View, Text, Dimensions, FlatList, TouchableOpacity, Image, Pressable, StyleSheet, Animated as Anim, ScrollView } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import NotificationData from '../../Data/NotificationData/NotificationData.js'
const { width, height } = Dimensions.get("window");



const Notification = () => {
    return (
        <View style={{ backgroundColor: '#121212', flex: 1, height: height, width: width }}>
            <View style={{
                height: height / 10,
                flexDirection: 'row',
                backgroundColor: '#011A15'
            }}>
                <View style={{ flex: 1.1, justifyContent: 'center' }}>
                    <Icon name="angle-left" style={{
                        color: "#C7D6D6",
                        fontSize: 30,
                        left: 10,
                    }}></Icon>
                </View>
                <View style={{ flex: 9, justifyContent: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 17, color: '#C7D6D6', fontWeight: 'bold' }}>Explore jobs</Text>
                </View>
            </View>
            <ScrollView style={{ flex:1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{height:height/20, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#0B2C25', borderBottomRightRadius: 5, borderTopRightRadius: 5, width: width / 5, alignSelf: 'flex-end' }}>
                            <Text style={{ textAlign: 'center', color: '#556969', fontSize: 10, lineHeight: 16 }}>
                                Today
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/driver.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{ paddingRight: 50, marginTop: 10, fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Your profile is updated.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{ paddingRight: 50, marginTop: 10, fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                    </View>

                    
                    <View style={{flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#0B2C25', borderBottomRightRadius: 5, borderTopRightRadius: 5, width: width / 5, alignSelf: 'flex-end' }}>
                            <Text style={{ textAlign: 'center',color: '#556969', fontSize: 10, lineHeight: 16 }}>
                                Yesterday
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/driver.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{ paddingRight: 50, marginTop: 10, fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Your profile is updated.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/driver.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Your profile is updated.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/driver.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Your profile is updated.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/driver.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Your profile is updated.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                        <View style={{height: height/8, flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Image
                                        source={require("../../Assets/notification_profile_pic2.png")}
                                        style={{ width: 60, height: 60 }}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', flex: 1 }}>
                                <Text style={{paddingRight: 50, marginTop: 10,  fontSize: 14, color: '#FAFAFA', lineHeight: 28, fontWeight: 'normal', fontStyle: 'normal' }}>Job Request: XYZ has invited you to accept a job.</Text>
                                <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 10, lineHeight: 16, color: '#556969' }}>2 hour ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Notification
