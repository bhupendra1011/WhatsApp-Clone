import React from 'react'
import { StyleSheet, Image } from 'react-native'

interface AvatarProps {
    imageUri: string,
    size?: number
}

const Avatar = ({ imageUri, size = 30, }: AvatarProps) => {
    return (
        <Image source={{ uri: imageUri || '' }} style={{ width: size, height: size, borderRadius: size }} />
    )
}

export default Avatar

const styles = StyleSheet.create({})
