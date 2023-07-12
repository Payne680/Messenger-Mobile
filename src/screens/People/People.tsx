import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import { styles } from './People.styles'
import Header from '../../components/Header/Header'
import { images } from '../../images'
import PeopleList from './PeopleList/PeopleList'

export default function People() {
    return (
        <SafeAreaView style={styles.container}>
            <Header
                heading="People"
                icon1={undefined}
                icon2={images.add_contact}
            />
            <PeopleList />
        </SafeAreaView>
    )
}