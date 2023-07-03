import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    bg: {
        width: width,
        height: 86,
    },

    text: {
        textAlign: 'center',
    }
});