import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { styles } from './Footer.styles'
import { images } from '../../images'

export default function Footer() {
    return (
        <ImageBackground resizeMode='contain' style={styles.bg} source={images.footerBg}>
            <Text style={styles.text}>Footer</Text>
        </ImageBackground>
    )
}