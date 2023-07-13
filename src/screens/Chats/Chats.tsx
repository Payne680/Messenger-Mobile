import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './Chats.styles'
import UserListing from './UserListing/UserListing';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/Searchbox/SearchBox';
import { images } from '../../images';
import StorySlider from '../../components/StorySlider/StorySlider';

export default function Chats() {
    return (
        <SafeAreaView style={styles.container}>
            <Header heading='Chats'
                icon1={images.take_photo}
                icon2={images.new_message}
            />
            <SearchBox />
            <StorySlider />
            <UserListing />
        </SafeAreaView>
    )
}