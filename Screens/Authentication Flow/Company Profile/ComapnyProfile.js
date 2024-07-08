import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import LoginStyle from '../Login/Style'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { color, onChange } from 'react-native-reanimated';


const ComapnyProfile = () => {
    const { width, height } = Dimensions.get("window");
    const [Title, setTitle] = useState("Owner Info");
    const [text, onChangeText] = React.useState("");
    const [Pass, onChangePass] = React.useState("");
    const [mobile, onChangeMobile] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [Swap, onChangeSwap] = React.useState(true);

    const isCompany = () => {
        onChangeSwap(false);
    };

    const isOwner = () => {
        onChangeSwap(true);
    };


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#121212',
            height: height,
            width: width,
        }}>
            <View style={{
                height: height / 10,
                flexDirection: 'row',
            }}>
                <View style={{ flex: 1.1, justifyContent: 'center' }}>
                    <Icon name="md-arrow-back" style={{
                        color: "rgba(255,255,255,1)",
                        fontSize: 30,
                        left: 10,
                    }}></Icon>
                </View>
                <View style={{ flex: 9, justifyContent: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 17, color: '#fff' }}>Sign Up</Text>
                </View>
            </View>
            <View style={{
                flex: 1.3,
                height: height / 3,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require("../../../Assets/logo.png")} style={{
                    height: 90,
                    width: 84
                }} />
            </View>
            <View style={{
                flex: 2.4,
                height: height / 3
            }}>
                <View style={{
                    flex: 0.04,
                    justifyContent: 'center',
                }}>
                    <Image source={require("../../../Assets/rectange_yellow.png")} style={{
                        left: 15,
                        height: 4,
                        width: 30
                    }} />
                </View>
                <ScrollView>
                    <View style={{
                        flex: 1.5,
                        left: 15,
                        width: width-30
                    }}>
                        <View style={{ flexDirection: 'row', width: width / 1.08, justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable onPress={isOwner}>
                                <Text style={{
                                    fontSize: 36,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    color: '#fff',

                                }} >{Swap ? <Text>Owner Info</Text> : (<Text>Company Info</Text>)}</Text>
                            </Pressable>
                            <Pressable onPress={isCompany}>
                                <Text style={{
                                    fontSize: 20,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    color: '#C4C4C4',
                                }} >{Swap ? <Text>Company Info</Text> : (<Text>Owner Info</Text>)}</Text>
                            </Pressable>
                        </View>
                        {Swap ?
                            (<View >

                                <View style={{ marginVertical: 20}}>
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
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ colorFocused: 'red', color: 'red' }}
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
                                            marginTop: 10

                                        }}
                                        customLabelStyles={{
                                            colorBlurred: '#2DAF95',
                                            fontSizeFocused: 12,
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ colorFocused: 'red', color: 'red' }}
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
                                            marginTop: 10
                                        }}
                                        customLabelStyles={{
                                            colorBlurred: '#2DAF95',
                                            fontSizeFocused: 12,
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ colorFocused: 'red', color: 'red' }}
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
                                            marginTop: 10
                                        }}
                                        customLabelStyles={{
                                            colorBlurred: '#2DAF95',
                                            fontSizeFocused: 12,
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ colorFocused: 'red', color: 'red' }}
                                        inputStyles={{
                                            color: '#C8FFF5',
                                            paddingHorizontal: 10,
                                        }}
                                        onChangeText={value => onChangePass(value)}
                                    />
                                </View>

                                
                                <View style={{
                                    marginVertical: 25,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ flex: 1.2, justifyContent: 'center' }}>
                                        <Text style={{
                                            textAlign: 'right',
                                            fontSize: 15,
                                            color: '#C7D6D6',
                                        }}>Already have ID?</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{
                                            textAlign: 'left',
                                            marginLeft: 15,
                                            textDecorationLine: 'underline',
                                            fontSize: 15,
                                            color: '#2DAF95',
                                        }}>Sign in</Text>
                                    </View>
                                </View>

                            </View>)

                            : (<View >
                                <View style={{ marginVertical: 20}}>
                                    <FloatingLabelInput

                                        label="Company Full name"
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
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ paddingTop: 3, color: 'red' }}
                                        inputStyles={{
                                            color: '#C8FFF5',
                                            paddingHorizontal: 10,
                                        }}
                                        onChangeText={value => onChangeText(value)}
                                    />
                                    <FloatingLabelInput
                                        label="Comapny Registeration no."
                                        value={mobile}
                                        containerStyles={{
                                            borderWidth: 1,
                                            padding: 5,
                                            borderColor: '#2DAF95',
                                            borderRadius: 5,
                                            marginTop: 15,
                                        }}
                                        customLabelStyles={{
                                            colorBlurred: '#2DAF95',
                                            fontSizeFocused: 12,
                                            colorFocused: '#2DAF95',
                                        }}
                                        labelStyles={{ paddingTop: 10, color: 'red', }}
                                        inputStyles={{
                                            color: '#C8FFF5',
                                            paddingHorizontal: 10,
                                        }}
                                        onChangeText={value => onChangeMobile(value)}
                                    />
                                    <FloatingLabelInput
                                        label="Company Email ID"
                                        value={email}
                                        containerStyles={{
                                            borderWidth: 1,
                                            padding: 5,
                                            borderColor: '#2DAF95',
                                            borderRadius: 5,
                                            marginTop: 15
                                            
                                        }}
                                        customLabelStyles={{
                                            colorBlurred: '#2DAF95',
                                            fontSizeFocused: 12,
                                            colorFocused: '#2DAF95',

                                        }}
                                        labelStyles={{ paddingTop: 3, colorFocused: 'red', color: 'red' }}

                                        inputStyles={{
                                            color: '#C8FFF5',
                                            paddingHorizontal: 10,
                                        }}
                                        onChangeText={value => onChangeEmail(value)}
                                    />
                                </View>
                            </View>)}
                    </View>
                </ScrollView>




            </View>
            <TouchableOpacity style={{
                width: width,
                backgroundColor: '#2DAF95',
                height: 52.2,
                justifyContent: 'center'
            }} activeOpacity={0.7}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#C7D6D6',
                    justifyContent: 'center'
                }}>{Swap ? "Next" : "Create"} </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={LoginStyle.TouchableButtonCustom} activeOpacity={0.7}>
                <Text style={LoginStyle.TouchableButtonText}>Login</Text>
            </TouchableOpacity> */}


        </View>
    )
}

export default ComapnyProfile
