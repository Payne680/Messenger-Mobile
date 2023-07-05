import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './Chats.styles'
import UserListing from './UserListing/UserListing';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import SearchBox from '../../components/Searchbox/SearchBox';

export default function Chats() {
    return (
        <SafeAreaView style={styles.container}>
            <ChatHeader />
            <SearchBox />
            <UserListing />
        </SafeAreaView>
    )
}