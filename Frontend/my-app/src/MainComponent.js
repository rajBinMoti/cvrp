import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainComponent = ({ url }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    const _setUser = (data) => {
        if (data != null) {
            setToken(data.token)
            setUser(data.user)
        } else {
            setToken(null)
            setUser(null)
        }
    }

    return (
        <NavigationContainer>
            {
                !user ?
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Stack.Screen name='Auth'>
                            {props => <AuthScreen {...props} url={url} _setUser={_setUser} />}
                        </Stack.Screen>
                    </Stack.Navigator> :
                    <Tab.Navigator>
                        <Tab.Screen name='Home'
                            options={{ tabBarIcon: () => <Icon name="home" size={30} color="#32f" /> }}>
                            {props => <HomeScreen {...props} url={url} _setUser={setUser} token={token} />}
                        </Tab.Screen>
                        <Tab.Screen name='Update Locations'
                            options={{ tabBarIcon: () => <Icon name="app-settings-alt" size={30} color="#32f" /> }}>
                            {props => <SettingsScreen {...props} url={url} user={user} _setUser={setUser} token={token} />}
                        </Tab.Screen>
                        <Tab.Screen name='Profile'
                            options={{ tabBarIcon: () => <Icon name="contacts" size={30} color="#32f" /> }}>
                            {props => <ProfileScreen icon {...props} user={user} _setUser={setUser} />}
                        </Tab.Screen>
                    </Tab.Navigator>

            }
        </NavigationContainer >
    )
}

export default MainComponent
