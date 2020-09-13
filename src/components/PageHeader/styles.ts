import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#5C93C4'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#F8F7F2',
        fontSize: 24,
        lineHeight: 32,
        maxHeight: 160,
        marginVertical: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }

});

export default styles;