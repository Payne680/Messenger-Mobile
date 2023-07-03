import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './Chats.styles'
import UserListing from '../UserListing/UserListing'
import Footer from '../../components/Footer/Footer'

export default function Chats() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>Header</Text>
            </SafeAreaView>
            {/* <View>
                <Text>Search bar</Text>
            </View>
            <View>
                <Text>Story listing</Text>
            </View> */}
            <UserListing />
            <View style={styles.footerWrapper}>
                <Footer />
            </View>
        </View>
    )
}