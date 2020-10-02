import *as React from 'react'; 

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
      

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen=()=>{
  return(
    <HomeStack.Navigator
    screenOptions={{
      title:'Home',
      headerStyle:{
        backgroundColor:'red',
      },
        headerTintColor:'#fff',
    }} 
    >
    <HomeStack.Screen name="Home"
    component={HomeScreen}
    options={{}}/>
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen=()=>{
  return(
    <DetailsStack.Navigator
    screenOptions={{
      title:'Details',
      headerStyle:{
        backgroundColor:'red',
      },
        headerTintColor:'#fff',
    }} 
    >
    <DetailsStack.Screen name="Details"
    component={DetailsScreen}
    options={{}}>
    </DetailsStack.Screen>
    </DetailsStack.Navigator>
  )
}

const ProfileStackScreen=()=>{
  return(
    <ProfileStack.Navigator
    screenOptions={{
      title:'Profile',
      headerStyle:{
        backgroundColor:'red',
      },
        headerTintColor:'#fff',
    }} 
    >
    <ProfileStack.Screen name="Profile"
    component={ProfileScreen}
    options={{}}>
    </ProfileStack.Screen>
    </ProfileStack.Navigator>
  )
}

const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Details" component={DetailsStackScreen}/>
        <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;