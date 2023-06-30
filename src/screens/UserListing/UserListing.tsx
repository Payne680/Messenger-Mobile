import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './UserListing.styles';
import { SwipeListView } from 'react-native-swipe-list-view';

export type users = {
    name: string;
    item: string;
}
const Data = [
    { id: 1, name: 'Jack Hallow', image: '' },
    { id: 2, name: 'Jack Smith', image: '' },
]

const UserListing = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text>{item.name}</Text>
            </View>
        );
    }
    return (
        <View>
            <SwipeListView data={Data} renderItem={renderItem} />
        </View>
    )
}

export default UserListing;