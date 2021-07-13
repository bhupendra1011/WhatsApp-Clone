import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { Text } from './Themed'

const InputBox = () => {

    const [message, setMessage] = React.useState("");


    const onMicrophonePress = () => {
        console.warn("microphone press");
    }

    const onSendPress = () => {
        console.warn("send message press");
        // send to BE
        setMessage('')
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        }
        else {
            onSendPress()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={26} color="grey" />
                <TextInput multiline style={styles.textInput} placeholder="Type a Message" onChangeText={setMessage} />
                <Entypo name="attachment" size={22} color="grey" style={styles.icon} />
                {!message && <Fontisto name="camera" size={22} color="grey" style={styles.icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    {!message
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        : <MaterialIcons name="send" size={28} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    container: { flexDirection: "row", margin: 10, alignItems: "flex-end" },
    mainContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10,
        backgroundColor: "white",
        marginRight: 10,
        flex: 1,
        borderRadius: 25
    },
    icon: {
        marginHorizontal: 5

    },
    textInput: {
        flex: 1,
        marginHorizontal: 10

    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    }
})

