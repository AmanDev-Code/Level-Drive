import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable, ScrollView, Alert } from 'react-native';
import Highlight1 from '../../Assets/SVG/Highlight1.svg'
import Highlight2 from '../../Assets/SVG/Highlight2.svg'
import Highlight3 from '../../Assets/SVG/Highlight3.svg'
import Placeholder from '../../Assets/SVG/Placeholder.svg'
import Cross from '../../Assets/SVG/Cross.svg'
const Menu = () => {
    const { width, height } = Dimensions.get("window");
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#040505', height: height }}>
                <View style={{ flex: 0.15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Placeholder />
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: '#C7D6D6', fontStyle: 'normal', fontWeight: '600', fontSize: 18, lineHeight: 24 }}>
                            Company LD
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Cross />
                    </View>

                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column', padding: 20 }}>
                        <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Company  Profile</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Company Drivers</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Address Book</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Wallet</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Rating</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>FAQ</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>T&C</Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#2DAF95', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Privacy Policy </Text>
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <Text style={{ color: '#AF2D2D', fontStyle: 'normal', fontWeight: '600', fontSize: 16, lineHeight: 26 }}>Log out</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', flex: 0.5, alignItems: 'flex-end' }}>
                        <View style={{ position: 'absolute' }}>
                            <Highlight1 height={height} />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Highlight2 height={height} />
                        </View>
                        <Highlight3 height={height} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default Menu
