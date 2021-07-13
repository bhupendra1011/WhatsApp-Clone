import React from 'react'
import { StyleSheet, FlatList, ImageBackground } from 'react-native'

import { Text, View } from '../components/Themed';
import { useRoute } from "@react-navigation/native";
import ChatMessage from '../components/ChatMessage';
import chatRoomData from "../data/Chats"
import BG from "../assets/images/BG.png"
import InputBox from '../components/InputBox';


const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground style={{ height: '100%', width: '100%' }} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted />
            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({})
