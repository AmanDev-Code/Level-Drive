import React, { useState } from 'react'

import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign"
import { View, Text, Dimensions, TextInput, Image } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import NotificationData from '../../Data/NotificationData/NotificationData.js'
const { width, height } = Dimensions.get("window");
import CallChat from '../../Assets/SVG/CallChat.svg'
import PlaceholderIcon from '../../Assets/SVG/PlaceholderIcon.svg'

const Chat = () => {
    const [text, onChangeText] = React.useState("");

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
                    <Text style={{ fontSize: 17, color: '#C7D6D6', fontWeight: 'bold' }}>My Drivers</Text>
                </View>
                <View style={{ justifyContent: 'space-evenly', flex: 2.5, flexDirection: 'row', alignItems: 'center' }}>
                    <CallChat />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{flexDirection: 'row', height: height / 7, marginBottom: 15, }}>
                    <View style={{ width: width, paddingLeft: 10, paddingTop: 10, flexDirection: 'row', }}>

                        <View style={{ overflow: 'hidden', backgroundColor: '#2DAF95', justifyContent: 'space-between', height: height / 10, width: width / 1.3, marginLeft: 50, borderRadius: 5, marginVertical: 20, flexDirection: 'column' }}>
                            <Text style={{ alignSelf: 'flex-start', fontSize: 16, lineHeight: 28, color: '#C7D6D6', paddingLeft: 25, paddingTop: 25 }}>
                                No . All are ok.
                            </Text>
                            <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 12, lineHeight: 14, color: '#0B2C25', paddingBottom: 5 }}>08:12</Text>
                        </View>

                        <View style={{
                            borderRadius: Math.round(width + height),
                            width: width * 0.15,
                            height: height * 0.075,
                            backgroundColor: '#0B2C25',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            marginLeft: 20,
                            marginVertical: 10
                        }}>
                            <Image
                                source={require("../../Assets/Chat1.png")}
                                style={{ width: 60, height: 60 }}
                                resizeMode={'contain'}
                            />
                        </View>

                    </View>
                </View>
            </View>

            <View style={{flex: 0.0, justifyContent: 'flex-end', transform: [

                    { rotateY: "180deg" },
                ]
            }}>
                <View style={{ flexDirection: 'row-reverse', height: height / 7, marginBottom: 15, }}>
                    <View style={{ width: width, paddingLeft: 10, paddingTop: 10, flexDirection: 'row', }}>

                        <View style={{
                            overflow: 'hidden', backgroundColor: '#225449', justifyContent: 'space-between', transform: [

                                { rotateY: "180deg" },
                            ], height: height / 10, width: width / 1.3, marginLeft: 50, borderRadius: 5, marginVertical: 20, flexDirection: 'column'
                        }}>
                            <Text style={{ alignSelf: 'flex-start', fontSize: 16, lineHeight: 28, color: '#C7D6D6', paddingLeft: 25, paddingTop: 10, paddingRight: 30 }}>
                            Where are you? Is there any issue with weather?
                            </Text>
                            <Text style={{ textAlign: 'right', paddingRight: 20, fontSize: 12, lineHeight: 14, color: '#0B2C25', marginBottom: 50 }}>08:12</Text>
                        </View>

                        <View style={{
                            borderRadius: Math.round(width + height),
                            width: width * 0.15,
                            height: height * 0.075,
                            backgroundColor: '#0B2C25',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            marginLeft: 20,
                            marginVertical: 10
                        }}>
                            <Image
                                source={require("../../Assets/Chat2.png")}
                                style={{ width: 60, height: 60 }}
                                resizeMode={'contain'}
                            />
                        </View>

                    </View>
                </View>
            </View>

            <View style={{ width: width - 20, alignSelf: 'center', justifyContent: 'flex-end',}}>
                <View style={{ backgroundColor: '#07201B', flexDirection: 'row', alignItems: 'center', borderRadius: 5, borderColor: '#07201B', height: height / 12, marginBottom: 15 }}>
                    <TextInput
                        style={{
                            padding: 15,
                            flex: 1,
                            color: '#C7D6D6',


                        }}
                        onChangeText={onChangeText}
                        value={text}
                        numberOfLines={5}
                        placeholder="Write your message here"

                        keyboardType="email-address"
                        placeholderTextColor='#225449'
                    />
                    <View style={{ paddingRight: 10 }}>
                        <PlaceholderIcon />
                    </View>


                </View>
            </View>
        </View>
    )
}

export default Chat
