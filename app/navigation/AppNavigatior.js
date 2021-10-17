import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicScreen from '../screens/MusicScreen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import PlayerScreen from '../screens/PlayerScreen';
import PlaylistScreen from '../screens/PlaylistScreen';


const Tab = createBottomTabNavigator();

function AppNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Songs"
                component={MusicScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="multitrack-audio" size={size} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Player"
                component={PlayerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="play-circle-outline" size={size} color={color} />
                    ),
                }} />
            <Tab.Screen
                name="Playlist"
                component={PlaylistScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="playlist-music-outline" size={size} color={color} />
                    ),
                }} />
        </Tab.Navigator>
    );
}


export default AppNavigator;

