import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { User } from '../types'
import Avatar from './Avatar'
import { Text, View } from './Themed'
import { useNavigation } from "@react-navigation/native";
import moment from 'moment'

interface ContactListItemProps {
    user: User
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;
    const navigation = useNavigation();



    const onClick = () => {
        // navigate to chat room with this user
    }


    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <View style={styles.leftContainer}>
                <Avatar imageUri={user.imageUri} size={50} />
                <View style={styles.middleContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.status}> {user.status} </Text>
                </View>
            </View>



        </TouchableOpacity>
    )
}

export default ContactListItem

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
    status: {
        fontSize: 16,
        color: 'grey'
    }

})
