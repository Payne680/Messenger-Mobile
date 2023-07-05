import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
    container: {},

    UserItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    userIcon: {
        width: 60,
        height: 60,
    },

    UserDetailsSection: {
        marginLeft: 15,
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
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});