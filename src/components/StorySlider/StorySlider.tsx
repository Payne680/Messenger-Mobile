import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './StorySlider.Styles'

const DATA = [
    { id: 1, image: '', title: 'add new' },
    { id: 1, image: '', title: 'add new' },
    { id: 1, image: '', title: 'add new' }
]

export default function StorySlider() {
    return (
        <View style={styles.container}>
            <FlatList horizontal data={DATA} />
        </View>
    )
}