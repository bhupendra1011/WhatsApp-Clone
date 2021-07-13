import React from 'react'
import { StyleSheet } from 'react-native'
import { ChatRoom } from '../types'
import Avatar from './Avatar'
import { Text, View } from './Themed'
import moment from 'moment'

interface ChatListItemProps {
    chatRoom: ChatRoom
}


const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    // person with whom in converstion
    const user = chatRoom.users[1];


    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Avatar imageUri={user.imageUri} size={50} />
                <View style={styles.middleContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.lastMessage}> {chatRoom.lastMessage.content} </Text>
                </View>
            </View>
            <Text>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>


        </View>
    )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',

        padding: 10
    },
    leftContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    middleContainer: {
        marginLeft: 15,
        justifyContent: "space-around",

    },
    chatInfo: {

    },
    username: {
        fontWeight: "bold",
        fontSize: 16
    },
    lastMessage: {
        fontSize: 16,
        opacity: .5,
        width: 200

    },
    time: {
        fontSize: 14,
        opacity: .5
    }

})
