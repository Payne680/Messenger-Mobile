import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Header.styles'
import { images } from '../../images'
import * as Icons from "react-native-heroicons/solid";

interface head {
    heading: any,
    icon1: any,
    icon2: any,
}


export default function Header({ heading, icon1, icon2 }: head) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Icons.Bars3Icon style={styles.menu} />
                <Text style={styles.title}>{heading}</Text>
            </View>
            <View style={styles.row}>
                <Image source={icon1} style={styles.icon} />
                <Image source={icon2} style={styles.icon} />
            </View>
        </View>
    )
}