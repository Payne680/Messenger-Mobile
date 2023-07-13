import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './CallsList.styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { images } from '../../../images';

export type users = {
    item: any;
};

const Data = [
    { id: 1, name: 'Jack Hallow', image: images.user_1, lastMessage: 'Outgoing · 4 Apr' },
    { id: 2, name: 'Andrew Parker', image: images.user_2, lastMessage: 'Missed · 9:40 AM' },
    { id: 3, name: 'karen Castillo', image: images.user_3, lastMessage: 'Incoming · 9:50 AM' },
    { id: 4, name: 'Maisey Humphrey', image: images.user_4, lastMessage: 'Outgoing · Fri' },
    { id: 5, name: 'Joshua lawrence', image: images.user_5, lastMessage: 'Missed · Fri' },
    { id: 6, name: 'Penn Malone', image: images.user_6, lastMessage: 'Incoming· Thu' },
]

const CallsList = () => {
    const renderItem: React.FC<users> = ({ item }) => {
        return (
            <View style={styles.UserItemContainer}>
                <Image source={item.image} style={styles.userIcon} />
                <View style={styles.UserDetailsSection}>
                    <View>
                        <Text style={styles.lable1}>{item.name}</Text>
                        <Text style={styles.lable2}>{item.lastMessage}</Text>
                    </View>
                    <Image source={images.phone} style={styles.userViewMessage} />
                </View>
            </View>
        );
    }
    return (
        <SwipeListView
            data={Data}
            renderItem={renderItem}
        />
    );
}


export default CallsList;