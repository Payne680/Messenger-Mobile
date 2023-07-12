import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Calls.styles'
import Header from '../../components/Header/Header'
import { images } from '../../images'

export default function Calls() {
    return (
        <View style={styles.container}>
            <Header heading='Calls' icon1={images.calls}
                icon2={images.calls}
            />
        </View>
    )
}