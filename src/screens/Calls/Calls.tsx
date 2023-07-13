import { SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './Calls.styles'
import Header from '../../components/Header/Header'
import { images } from '../../images'
import CallsList from './CallsList/CallsList'

export default function Calls() {
    return (
        <SafeAreaView style={styles.container}>
            <Header heading='Calls' icon1={images.phone}
                icon2={images.calls}
            />
            <CallsList />
        </SafeAreaView>
    )
}