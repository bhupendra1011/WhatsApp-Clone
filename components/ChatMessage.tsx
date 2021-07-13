import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Text } from './Themed'
import { Message } from "../types"

import moment from "moment";
import Colors from '../constants/Colors';

interface ChatMessageProps {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        //check with authenticated user if id matching
        return message.user.id === 'u1'

    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
            {
                backgroundColor: isMyMessage() ? '#DCF8C5' : '#e5e5e5',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,


            }

            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>

        </View>
    )
}

export default ChatMessage

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    messageBox: {

        borderRadius: 5,
        padding: 5
    },
    time: {
        alignSelf: "flex-end",
        opacity: .5
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 2


    },
    message: {


    }
})
