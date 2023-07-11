import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { styles } from './StorySlider.Styles'
import { images } from '../../images'

export type users = {
    item: any;
}

const DATA = [
    { id: 1, image: images.user_1, user: 'Joshua' },
    { id: 2, image: images.user_2, user: 'Martin' },
    { id: 3, image: images.user_3, user: 'Karen' },
    { id: 4, image: images.user_4, user: 'Maisey' },
    { id: 5, image: images.user_5, user: 'Joshua' },
    { id: 6, image: images.user_6, user: 'Penn' },
]

export default function StorySlider() {
    const renderItem: React.FC<users> = ({ item }) => (
        <View style={styles.userIconContainer}>
            <Image style={styles.storyUserIcon} source={item.image} />
            <Text style={styles.userName}>{item.user}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal data={DATA}
                renderItem={renderItem}
            />
        </View>
    )
}