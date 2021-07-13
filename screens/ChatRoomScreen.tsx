import React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed';
import { useRoute } from "@react-navigation/native";

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <View>
            <Text>Chat Room</Text>
        </View>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({})
