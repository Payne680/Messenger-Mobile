import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './UserListing.styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { images } from '../../images';

export type users = {
    item: any;
};

const Data = [
    { id: 1, name: 'Jack Hallow', image: images.user_1, lastMessage: 'You: Wassup man! + 9:40 AM' },
    { id: 2, name: 'Andrew Parker', image: images.user_2, lastMessage: 'You: All good fam! + 9:40 AM' },
    { id: 3, name: 'karen Castillo', image: images.user_3, lastMessage: 'You: Ok thanks! + 9:50 AM' },
    { id: 4, name: 'Maisey Humphrey', image: images.user_4, lastMessage: 'You: Ok see you in To... + Fri' },
    { id: 5, name: 'Joshua lawrence', image: images.user_5, lastMessage: 'Have a good day, Maisey + Fri' },
    { id: 6, name: 'Penn Malone', image: images.user_6, lastMessage: 'The business plan loo.. + Thu' },
]

const UserListing = () => {
    const renderItem: React.FC<users> = ({ item }) => {
        return (
            <View style={styles.UserItemContainer}>
                <Image source={item.image} style={styles.userIcon} />
                <View style={styles.UserDetailsSection}>
                    <View>
                        <Text style={styles.lable1}>{item.name}</Text>
                        <Text style={styles.lable2}>{item.lastMessage}</Text>
                    </View>
                    <Image source={images.checked} style={styles.userViewMessage} />
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