import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './Chats.styles'
import UserListing from './UserListing/UserListing';

export default function Chats() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Header</Text>
            <UserListing />
        </SafeAreaView>
    )
}