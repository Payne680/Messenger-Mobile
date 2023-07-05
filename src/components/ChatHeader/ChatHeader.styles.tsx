import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    icon: {
        height: 40,
        width: 40,
        paddingHorizontal: 15,
        marginVertical: 15,
        margin: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
    }
});