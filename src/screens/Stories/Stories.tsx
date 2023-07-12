import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Stories.style'
import Header from '../../components/Header/Header'

export default function Stories() {
    return (
        <View style={styles.container}>
            <Header heading='Stories'
                icon1={undefined}
                icon2={undefined}
            />
        </View>
    )
}