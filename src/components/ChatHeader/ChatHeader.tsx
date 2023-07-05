import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './ChatHeader.styles'
import { images } from '../../images'

export default function ChatHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={images.avatar} style={styles.avatar} />
                <Text style={styles.title}>Chats</Text>
            </View>
            <View style={styles.row}>
                <Image source={images.take_photo} style={styles.icon} />
                <Image source={images.new_message} style={styles.icon} />
            </View>
        </View>
    )
}