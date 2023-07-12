import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    menu: {
        borderRadius: 50,
        padding: 5,
        backgroundColor: colors.gray01,
        width: 35,
        height: 35,
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