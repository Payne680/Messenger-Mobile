import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { styles } from './People.styles'
import Header from '../../components/Header/Header'
import { images } from '../../images'
import PeopleList from './PeopleList/PeopleList'

const DATA1 = [
    { id: 1, image: images.user_1, name: 'Martha Craig' },
    { id: 2, image: images.user_2, name: 'Kieron Dotson' },
    { id: 3, image: images.user_3, name: 'Zack John' },
    { id: 4, image: images.user_4, name: 'Jamie Franco' },
    { id: 5, image: images.user_5, name: 'Tabitha Potter' },
];
const DATA2 = [{ id: 1, image: images.user_6, name: 'Albert Lasker' }];

export default function People() {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                heading="People"
                icon1={images.calls}
                icon2={undefined}
            />
            <PeopleList data={DATA1} />
            <Text style={styles.label1}>Recently active</Text>
            <PeopleList data={DATA2} />
        </SafeAreaView>
    )
}