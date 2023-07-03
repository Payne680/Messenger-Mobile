import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './UserListing.styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { images } from '../../images';

export type users = {
    item: any;
};

const Data = [
    { id: 1, name: 'Jack Hallow', image: '', lastMessage: 'You: Wassup man! + 9:40 AM' },
    { id: 2, name: 'Andrew Parker', image: '', lastMessage: 'You: All good fam! + 9:40 AM' },
    { id: 3, name: 'karen Castillo', image: '', lastMessage: 'You: Ok thanks! + 9:50 AM' },
    { id: 4, name: 'Maisey Humphrey', image: '', lastMessage: 'You: Ok see you in To... + Fri' },
    { id: 5, name: 'Joshua lawrence', image: '', lastMessage: 'Have a good day, Maisey + Fri' },
    { id: 6, name: 'Penn Malone', image: '', lastMessage: 'The business plan loo.. + Thu' },
]

const UserListing = () => {
    const renderItem: React.FC<users> = ({ item }) => {
        return (
            <View style={styles.UserItemContainer}>
                <Image source={images.user_1} style={styles.userIcon} />
                <View style={styles.UserDetailsSection}>
                    <Text style={styles.lable1}>{item.name}</Text>
                    <Text style={styles.lable2}>{item.lastMessage}</Text>
                </View>
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