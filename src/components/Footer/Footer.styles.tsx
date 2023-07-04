import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    bg: {
        width: width,
        height: 90,
    },

    text: {
        textAlign: 'center',
    }
});