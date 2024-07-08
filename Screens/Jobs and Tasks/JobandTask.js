import React, { useState } from 'react'
import { View, Text, Dimensions, FlatList, TouchableOpacity, Image, Pressable } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign"
import Calendar from '../../Assets/SVG/Calendar.svg'
import { NavigationContainer } from '@react-navigation/native';
import Location from '../../Assets/SVG/Location.svg'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





const JobandTask = () => {
    const { width, height } = Dimensions.get("window");
    const Tab = createMaterialTopTabNavigator();
    const [Jobdata, setdata] = useState([
        { jobName: 'Job Name', DataPosted: 'Pasted On 13th April', TotalJobsApplied: '5+ Applied', Description: 'Description', texton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore?...', isSelected: false },
        { jobName: 'Job Name', DataPosted: 'Pasted On 13th April', TotalJobsApplied: '5+ Applied', Description: 'Description', texton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore?...', isSelected: false },
        { jobName: 'Job Name', DataPosted: 'Pasted On 13th April', TotalJobsApplied: '5+ Applied', Description: 'Description', texton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore?...', isSelected: false },
        { jobName: 'Job Name', DataPosted: 'Pasted On 13th April', TotalJobsApplied: '5+ Applied', Description: 'Description', texton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore?...', isSelected: false },

    ])
    const [TaskData, setTaskData] = useState([
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
        { Name: 'John Doe', Vehicle_number: 'JH-05-1864', TaskAppliedFor: 'Task Name', Location: '2972 Westheimer Rd. Santa Ana, Illinois 85486', isSelected: false },
    ])
    // const [Swap, onChangeSwap] = React.useState(true);

    // const isAllads = () => {
    //     onChangeSwap(true);
    // };

    // const isAlltask = () => {
    //     onChangeSwap(false);
    // };



    const AllAds = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 15, backgroundColor: '#040505', marginTop: 19, width: width - 20, borderRadius: 10 }}>
                    <View style={{ padding: 15, height: height / 4.5, width: width / 1. }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                                    {item.jobName}
                                </Text>
                                <Text style={{ fontSize: 11, fontStyle: 'italic', color: '#556969' }}>
                                    {item.DataPosted}
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center', width: width / 4 }}>
                                <View style={{
                                    borderRadius: Math.round(width + height),
                                    width: width * 0.2,
                                    height: height * 0.1,
                                    backgroundColor: '#0B2C25',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{ color: '#FFC100', fontWeight: 'bold', fontStyle: 'normal', fontSize: 18, lineHeight: 21, textAlign: 'center' }}>
                                        {item.TotalJobsApplied}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                                {item.Description}
                            </Text>
                            <Text style={{ color: '#C7D6D6', fontSize: 14, fontStyle: 'normal' }}>
                                {item.texton}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const AllTasks = ({ item, index }) => {
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
                                <Image source={require('../../Assets/Maps.png')} style={{ width: width / 4, height: height / 11.2, color: "#fff" }}></Image>
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

    const AllAdsList = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212' }}>
                <FlatList
                    data={Jobdata}
                    renderItem={AllAds}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}/>
            </View>

        );
    }



    const AllTasksList = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#121212' }}>
                <FlatList
                    data={TaskData}
                    renderItem={AllTasks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        );
    }


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
                    <Text style={{ fontSize: 17, color: '#C7D6D6', fontWeight: 'bold' }}>My jobs</Text>
                </View>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <AntIcon name="filter" color="#C7D6D6" size={30} />
                </View>
            </View>
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
                        <Tab.Screen name="All Jobs" component={AllAdsList} />
                        <Tab.Screen name="All Tasks" component={AllTasksList} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
            {/* <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#121212' }}>
                <Pressable onPress={isAllads} style={{ alignItems: 'center', flex: 1 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#556969' }}>All ads</Text>
                    </View>
                </Pressable>
                <Pressable onPress={isAlltask} style={{ alignItems: 'center', flex: 1 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#556969' }}>All tasks</Text>
                    </View>
                </Pressable>
            </View> */}

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#0B2C25' }}>
                </View>
            </View>

        </View>
    )
}

export default JobandTask
