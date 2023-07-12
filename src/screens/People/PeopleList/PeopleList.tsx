import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './PeopleList.styles';
import { SwipeListView } from 'react-native-swipe-list-view';
import { images } from '../../../images';

export type users = {
    item: any;
};

const DATA = [
    { id: 1, image: images.user_1, name: 'Martha Craig' },
    { id: 2, image: images.user_2, name: 'Kieron Dotson' },
    { id: 3, image: images.user_3, name: 'Zack John' },
    { id: 4, image: images.user_4, name: 'Jamie Franco' },
    { id: 5, image: images.user_5, name: 'Tabitha Potter' },
    { id: 6, image: images.user_5, name: 'Tabitha Potter' },
    { id: 7, image: images.user_5, name: 'Tabitha Potter' },
];

const PeopleListing = () => {
    const renderItem: React.FC<users> = ({ item }) => {
        return (
            <View style={styles.UserItemContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.rowLeft}>
                        <Image source={item.image} style={styles.peopleIcon} />
                        <Text style={styles.timeTag}></Text>
                        <View style={styles.UserDetailsSection}>
                            <View>
                                <Text style={styles.lable1}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <SwipeListView
            data={DATA}
            renderItem={renderItem}
        />
    );
}


export default PeopleListing;














// import React from 'react';
// import { View, Text, FlatList, Image } from 'react-native';
// import { styles } from './PeopleList.styles';
// import { SwipeListView } from 'react-native-swipe-list-view';

// const PeopleList = ({ data }: any) => {
//     const renderPeople = ({ item }: any) => (
//         <View style={styles.rowContainer}>
//             <View style={styles.rowLeft}>
//                 <Image style={styles.peopleIcon} source={item.image} />
//                 <Text style={styles.label1}>{item.name}</Text>
//                 <Text style={styles.timeTag}>8 min</Text>
//             </View>
//         </View>
//     );

//     return (
//         <View>
//             <SwipeListView
//                 data={data}
//                 renderItem={renderPeople} />
//         </View>
//     );
// };

// export default PeopleList;