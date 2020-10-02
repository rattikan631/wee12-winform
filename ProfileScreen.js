import *as React from 'react';
import {View, Text, Button} from 'react-native';

const ProfileScreen=({navigation})=>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>ProfileScreen</Text>
            <Button
            title="Go Back"
            onPress={()=>navigation.goBack()}/>
        </View>
    )
}
export default ProfileScreen;