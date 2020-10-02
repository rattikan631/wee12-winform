import *as React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen=({navigation})=>{
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >HomeScreen</Text>
            <Button
            title="Go to Details"
            onPress={()=>navigation.navigate('Details')}/>
            <Button
            title="Go to Details"
            onPress={()=>navigation.navigate('Profile')}/>
        </View>
    )
}
export default HomeScreen;