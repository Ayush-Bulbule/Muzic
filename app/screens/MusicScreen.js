import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'

const HomeScreen = () => {
    return (
        <Screen style={styles.screen}>
            <Text style={styles.text}>Tis is home</Text>
        </Screen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#010036",
    },
    text: {
        color: "#fff"
    }
})
