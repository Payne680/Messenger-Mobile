import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        flex: 1,
    },
    peopleIcon: {
        width: 60,
        height: 60,
    },
    rowLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    label1: {
        fontSize: 17,
        fontWeight: '500',
        marginLeft: 15,
        lineHeight: 22,
    },
    timeTag: {
        position: 'absolute',
        top: '70%',
        fontSize: 8,
        backgroundColor: colors.green01,
        paddingHorizontal: 5,
        paddingVertical: 2,
        textAlign: 'center',
        left: '14%',
        height: 13,
        width: 13,
        borderRadius: 50,
    },

    UserItemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    UserDetailsSection: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 15,
    },

    lable1: {
        color: colors.zblack,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22,
    },

    lable2: {
        color: colors.zblack,
        opacity: 0.5,
        fontWeight: '400',
    },

    userViewMessage: {
        width: 20,
        height: 20,
    },
});