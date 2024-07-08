import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import Delete from '../../Assets/SVG/Delete.svg'
import Calendar from '../../Assets/SVG/Calendar.svg'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { View, Text, Dimensions, FlatList, TouchableOpacity, Image, StyleSheet, Animated as Anim } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Location from '../../Assets/SVG/Location.svg'
import Svg, { Path } from 'react-native-svg';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DriverData from '../../Data/DriverData/DriverData.js';
// import BottomSheet from 'reanimated-bottom-sheet'
// import Animated from 'react-native-reanimated'

const { width, height } = Dimensions.get("window");


const MyDrivers = () => {

    const Tab = createMaterialTopTabNavigator();
    const [OverlayJSX, setOverlayJSX] = useState(false);
    const [OverlayJSXforAll, setOverlayJSXforAll] = useState(false);
    const [TaskData, setTaskData] = useState([
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
    ])

    // const swipeBtns = [{
    //     text: 'Delete',
    //     backgroundColor: 'red',
    //     underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    //     onPress: () => { console.log("hi") },

    // }]
    // const confirmationScreen = React.createRef();
    // const fall = new Animated.Value(1);

    // const renderInner = () => {
    //     <View style={{
    //         backgroundColor: '#fff',
    //         padding: 16,
    //         height: 450,
    //     }}>
    //         <Text style={{ fontSize: 50, backgroundColor: 'white' }}>HEllo</Text>
    //     </View>
    // }


    // methods to open and close overlay for slider and delete icon 
    const openOverlayforDeleteAll = () => {
        setOverlayJSX(false)
        setOverlayJSXforAll(true)
    }
    const closeOverlay = () => {
        setOverlayJSX(false)
        setOverlayJSXforAll(false)
    }
    const openOverlay = () => {
        setOverlayJSX(true)
        setOverlayJSXforAll(false)
    }


    // JSX OverLays for delete for one slider and delete for all
    function OverlayforDeleteOne() {
        return (<View style={{
            backgroundColor: '#05120F',
            height: height / 2.5,
            elevation: 2,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
        }}>
            <View style={{
                alignItems: 'center',
                flex: 0.35
            }}>
                <Image source={require("../../Assets/logo.png")} style={{
                    width: 90,
                    height: 90,
                    marginTop: -35,
                    overflow: 'hidden'
                }} resizeMode={'contain'} />
            </View>
            <View style={{
                flex: 0.8,
                width: width / 1.6,
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: '#C7D6D6',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'normal',
                    lineHeight: 28,
                    letterSpacing: 0.1
                }}>
                    You’r about to cancel the interview.
                    Are you sure?
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity style={{
                    width: width - 20,
                    alignSelf: 'center',
                    backgroundColor: '#2DAF95',
                    height: 52.2,
                    justifyContent: 'center',
                    borderRadius: 5
                }} activeOpacity={0.7}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 26,
                        fontWeight: '600',
                        color: '#C7D6D6',
                        justifyContent: 'center'
                    }}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: width - 20,
                    alignSelf: 'center',
                    borderColor: '#2DAF95',
                    borderWidth: 1,
                    height: 52.2,
                    justifyContent: 'center',
                    borderRadius: 5
                }} activeOpacity={0.7}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 26,
                        fontWeight: '600',
                        color: '#C7D6D6',
                        justifyContent: 'center'
                    }} onPress={closeOverlay}>NO</Text>
                </TouchableOpacity>
            </View>
        </View>);
    }

    function OverlayforDeleteAll() {
        return (<View style={{
            backgroundColor: '#05120F',
            height: height / 2.5,
            elevation: 2,
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            flexWrap:'wrap-reverse'
        }}>
            <View style={{
                alignItems: 'center',
                flex: 0.35
            }}>
                <Image source={require("../../Assets/logo.png")} style={{
                    width: 90,
                    height: 90,
                    marginTop: -35,
                    overflow: 'hidden'
                }} resizeMode={'contain'} />
            </View>
            <View style={{
                flex: 0.8,
                width: width,
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: '#C7D6D6',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'normal',
                    lineHeight: 28,
                    letterSpacing: 0.1
                }}>
                    You’r about to cancel all the interview.{`\n`} 
                    Once done, it can’t be undone. {`\n`} Are you sure?
                </Text>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity style={{
                    width: width - 20,
                    alignSelf: 'center',
                    backgroundColor: '#2DAF95',
                    height: 52.2,
                    justifyContent: 'center',
                    borderRadius: 5
                }} activeOpacity={0.7}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 26,
                        fontWeight: '600',
                        color: '#C7D6D6',
                        justifyContent: 'center'
                    }}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: width - 20,
                    alignSelf: 'center',
                    borderColor: '#2DAF95',
                    borderWidth: 1,
                    height: 52.2,
                    justifyContent: 'center',
                    borderRadius: 5
                }} activeOpacity={0.7}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 26,
                        fontWeight: '600',
                        color: '#C7D6D6',
                        justifyContent: 'center'
                    }} onPress={closeOverlay}>NO</Text>
                </TouchableOpacity>
            </View>
        </View>);
    }

    // Slider and animation for each slider card
    const rightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 50],
            outputRange: [1.5, -2],
            extrapolate: 'clamp'
        })
        return (
            <>
            <View style={{
                backgroundColor: '#0B2C25', marginTop: 2.5,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                height: '95%',
                width: '20%',
                left: 10,
                justifyContent: 'center',
                alignItems: 'center',

            }}
            >

                <Anim.View style={{ transform: [{ scale }] }} >
                    <Delete />
                </Anim.View>
            </View>
            </>
        )
    }

    // const [Swap, onChangeSwap] = React.useState(true);

    // const isAllads = () => {
    //     onChangeSwap(true);
    // };

    // const isAlltask = () => {
    //     onChangeSwap(false);
    // };

    // JSX for Each Top Tab Active Free Interview

    const ActiveJSX = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 15, backgroundColor: '#040505', marginTop: 19, width: width - 20, borderRadius: 10 }}>
                    <View style={{ paddingLeft: 10, height: height / 4.5, width: width - 20 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ justifyContent: 'center', width: width / 5 }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.15,
                                    height: height * 0.075,
                                    backgroundColor: '#0B2C25',
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
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                                    {item.Name}
                                </Text>
                                <Text style={{ fontSize: 11, fontStyle: 'italic', color: '#556969' }}>
                                    {item.Vehicle_number}
                                </Text>
                            </View>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#05120F', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: height / 11, width: width / 4, borderRadius: 2 }}>
                                <Image source={require('../../Assets/Maps.png')} style={{ width: width / 4, height: height / 11.2, color: "#fff", elevation: 10 }}></Image>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingTop: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.2, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
                                        <Calendar width="15" height="15" fill="#556969" />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#C7D6D6' }}>
                                            {item.TaskAppliedFor}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.2, top: 4, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                                        <Location width="15" height="15" fill="#556969" />
                                    </View>
                                    <View style={{ flex: 1.2, justifyContent: 'flex-start', flexDirection: 'column' }}>
                                        <Text style={{ color: '#C7D6D6', fontStyle: 'normal', fontSize: 14 }}>
                                            {item.Location}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
    const FreeJSX = ({ item }) => (
        <>

            <TouchableOpacity>

                <View style={{ flex: 1, marginTop: 10 }}>

                    <View style={styles.cardcont}>

                        <View style={styles.row1}>
                            <View style={styles.imgrow}>
                                <Image source={item.image} style={styles.driverimage} />
                                <View style={styles.ratingcard}>
                                    <Svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <Path
                                            d="M5.91763 1.27114C6.06731 0.810487 6.71901 0.810487 6.86869 1.27114L7.80338 4.14783C7.87032 4.35385 8.0623 4.49333 8.27891 4.49333H11.3036C11.788 4.49333 11.9894 5.11313 11.5975 5.39783L9.15047 7.17573C8.97523 7.30305 8.9019 7.52873 8.96884 7.73474L9.90353 10.6114C10.0532 11.0721 9.52597 11.4552 9.13411 11.1705L6.68705 9.39256C6.51181 9.26524 6.27451 9.26524 6.09927 9.39256L3.65221 11.1705C3.26035 11.4552 2.73311 11.0721 2.88279 10.6114L3.81748 7.73474C3.88442 7.52873 3.81109 7.30305 3.63584 7.17573L1.18878 5.39783C0.796927 5.11313 0.998315 4.49333 1.48268 4.49333H4.50741C4.72402 4.49333 4.916 4.35385 4.98294 4.14783L5.91763 1.27114Z"
                                            fill="#EB7F01"
                                        />
                                    </Svg>
                                    <Text style={styles.ratingtxt}>{item.rating}</Text>
                                </View>
                            </View>
                            <View style={styles.driverrow}>
                                <Text style={styles.name}>{item.drivername}</Text>
                            </View>
                            <View style={styles.btnrow}>
                                <Text style={styles.hirebtn}>{item.btn}</Text>
                            </View>
                        </View>
                        <View style={styles.detailscont}>
                            <View style={styles.jobsdone}>
                                <Text style={styles.txtdetails}>Job Completed</Text>
                                <Text style={styles.num}>{item.jobsdone}</Text>
                            </View>
                            <View>
                                <Text style={styles.txtdetails}>Experience</Text>
                                <Text style={styles.num}>{item.exp}</Text>
                            </View>
                            <View>
                                <Text style={styles.txtdetails}>License Type</Text>
                                <Text style={styles.num}>{item.license}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        </>
    );

    const InterviewJSX = ({ item }) => (
        <>

            <View style={{ flex: 1, marginTop: 10, }}>
                {/* <BottomSheet
                ref={confirmationScreen}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                initialSnap={0}
                callbackNode={fall}
                enabledGestureInteraction={true}
                onActivated={() => confirmationScreen.current.snapTo(1)} add on any view
            /> */}
                <Swipeable renderRightActions={rightSwipe} onSwipeableWillOpen={openOverlay} >
                    <TouchableOpacity >
                        <View style={styles.cardcont}>
                            <View style={styles.row1}>
                                <View style={styles.imgrow}>
                                    <Image source={item.image} style={styles.driverimage} />
                                    <View style={styles.ratingcard}>
                                        <Svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <Path
                                                d="M5.91763 1.27114C6.06731 0.810487 6.71901 0.810487 6.86869 1.27114L7.80338 4.14783C7.87032 4.35385 8.0623 4.49333 8.27891 4.49333H11.3036C11.788 4.49333 11.9894 5.11313 11.5975 5.39783L9.15047 7.17573C8.97523 7.30305 8.9019 7.52873 8.96884 7.73474L9.90353 10.6114C10.0532 11.0721 9.52597 11.4552 9.13411 11.1705L6.68705 9.39256C6.51181 9.26524 6.27451 9.26524 6.09927 9.39256L3.65221 11.1705C3.26035 11.4552 2.73311 11.0721 2.88279 10.6114L3.81748 7.73474C3.88442 7.52873 3.81109 7.30305 3.63584 7.17573L1.18878 5.39783C0.796927 5.11313 0.998315 4.49333 1.48268 4.49333H4.50741C4.72402 4.49333 4.916 4.35385 4.98294 4.14783L5.91763 1.27114Z"
                                                fill="#EB7F01"
                                            />
                                        </Svg>
                                        <Text style={styles.ratingtxt}>{item.rating}</Text>
                                    </View>
                                </View>
                                <View style={styles.driverrow}>
                                    <Text style={styles.name}>{item.drivername}</Text>
                                </View>
                                <View style={[styles.boxx, item.interviewDate == '--/--/21' ? { backgroundColor: '#260505' } : { backgroundColor: '#382508' }]}>
                                    <View style={{ width: width / 6, justifyContent: 'center' }}>
                                        <Text style={[styles.boxxtext, item.interviewDate == '--/--/21' ? { color: '#EB3434' } : { color: '#EB7F01' }]}>Interview at</Text>
                                        <Text style={[styles.boxxtext1, item.interviewDate == '--/--/21' ? { color: '#EB3434' } : { color: '#EB7F01' }]}>{item.interviewDate == '--/--/21' ? item.interviewDate : item.interviewDate}</Text>
                                    </View>

                                </View>
                            </View>
                            <View style={styles.detailscont}>
                                <View style={styles.jobsdone}>
                                    <Text style={styles.txtdetails}>Job Completed</Text>
                                    <Text style={styles.num}>{item.jobsdone}</Text>
                                </View>
                                <View>
                                    <Text style={styles.txtdetails}>Experience</Text>
                                    <Text style={styles.num}>{item.exp}</Text>
                                </View>
                                <View>
                                    <Text style={styles.txtdetails}>License Type</Text>
                                    <Text style={styles.num}>{item.license}</Text>
                                </View>
                            </View>
                            <View style={styles.bio}>
                                <Text style={styles.bio1}>Bio</Text>
                                <Text style={styles.description}>{item.desc}</Text>
                            </View>
                        </View>


                    </TouchableOpacity>
                </Swipeable>

            </View>

        </>
    );

    // FlatList for Active List cards
    const ActiveList = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212' }}>
                <FlatList
                    data={TaskData}
                    renderItem={ActiveJSX}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }

    // FlatList for FreeList Cards
    const FreeList = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212' }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.no}
                    data={DriverData}
                    renderItem={FreeJSX}
                    maxToRenderPerBatch={5}
                />
            </View>

        );
    }

    // FlatList for Interview List cards with slider
    const InterviewList = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212' }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.no}
                    data={DriverData}
                    renderItem={InterviewJSX}
                    maxToRenderPerBatch={5}
                />
                {OverlayJSX ? (<OverlayforDeleteOne></OverlayforDeleteOne>): null}
                
            </View>

        );
    }

    
    // Main Return Method for MyDrivers Component
    return (
        <View style={{ backgroundColor: '#121212', flex: 1, height: height, width: width }}>
            {/* Header Module */}
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
                    <Calendar fill='#556969' height='25' width='25' />
                    <Delete onPress={openOverlayforDeleteAll}/>
                </View>
            </View>
            {/* Top tab Bar with slider */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#121212' }}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator
                        initialRouteName="AllJobs"
                        screenOptions={{
                            tabBarStyle: {
                                backgroundColor: '#121212',
                                height: 50,
                                width: width,
                            },
                            tabBarLabelStyle: {
                                fontWeight: '600',
                                textTransform: 'none',
                            },
                            tabBarIndicatorStyle: {
                                backgroundColor: '#FFC100',
                                height: 4,
                            },
                            tabBarActiveTintColor: '#FFC100',
                            tabBarInactiveTintColor: '#556969',
                        }}>
                        <Tab.Screen name="Active" component={ActiveList} />
                        <Tab.Screen name="Free" component={FreeList} />
                        <Tab.Screen name="Interview" component={InterviewList} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
            
            {/* Divider below top tab bar */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#0B2C25' }}>
                </View>
            </View>
            
            {/* Overlay part with states */}
            {OverlayJSXforAll ? (<OverlayforDeleteAll></OverlayforDeleteAll>): null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        height: '90%',
    },
    cardcont: {
        marginTop: 1,
        marginBottom: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#040505',
        height: '95%',
        width: '95%',
        alignSelf: 'center',
    },
    boxx: {
        width: 82,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    boxxtext: {
        fontSize: 10,
        lineHeight: 12,
        textAlign: 'right'
    },
    boxxtext1: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14,
        textAlign: 'right'
    },
    icon: {
        flex: 0.15,
        height: '15%',
        marginTop: -8,
        marginRight: -15,
    },
    txt: {
        color: '#FAFAFA',
        fontWeight: '700',
        fontSize: 22,
        marginLeft: 15,
    },
    maincont: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 35,
    },
    mapview: {
        width: '100%',
        height: '42%',
        elevation: -10,
    },
    bio: {
        marginTop: 'auto',
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: '45%',
        width: '90%',
    },
    bio1: {
        color: '#2DAF95',
        paddingHorizontal: 10,
    },
    description: {
        color: '#C7D6D6',
        paddingHorizontal: 10,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    driverimage: {
        borderRadius: Math.round(width + height),
        width: width * 0.15,
        height: height * 0.075,
    },
    imgrow: {
        marginLeft: 20,
        marginTop: 5,
    },
    driverrow: {
        height: '50%',
        width: '45%',
        marginLeft: 15,
        marginTop: 5,
    },
    btnrow: {
        width: '25%',
        height: '40%',
        backgroundColor: '#2DAF95',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginTop: -1,
    },
    hirebtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    detailscont: {
        flexDirection: 'row',
        width: width / 1.22,
        height: 50,
        alignSelf: 'flex-end',
        justifyContent: 'space-evenly',
        marginTop: -45,
    },
    txtdetails: {
        color: '#1E8671',
        fontSize: 10,
        fontWeight: '500',
    },
    num: {
        color: '#E2F5F2',
    },
    ratingcard: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        backgroundColor: '#011A15',
        marginTop: -5,
        paddingHorizontal: 5,
        marginLeft: -1,
    },
    ratingtxt: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 10,
        alignSelf: 'center',
        marginLeft: 5,
    },
    overlay: {
        position: 'absolute',
        top: 132,
        backgroundColor: '#040505',
        width: '90%',
        alignSelf: 'center',
        height: '22%',
        borderRadius: 10,
    },
    dropdown: {
        position: 'absolute',
        top: 260,
        right: 150,
    },
    overlayimg: {
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    overlaytxt: {
        color: '#fff',
        fontWeight: '400',
    },
    overlayrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#05120F',
        marginTop: 10,
        paddingBottom: 5,
    },
    imgoverlay: {
        marginLeft: 15,
    },
    nameoverlay: {
        marginLeft: -100,
        marginTop: 7,
    },
    msgoverlay: {
        marginRight: -100,
    },
    phoneoverlay: {
        marginRight: 15,
    },
});

export default MyDrivers
