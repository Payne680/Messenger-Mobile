import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {},

    UserItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    userIcon: {
        width: 60,
        height: 60,
    },

    UserDetailsSection: {
        marginLeft: 15,
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
    }
});