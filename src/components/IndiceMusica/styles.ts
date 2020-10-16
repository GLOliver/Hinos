import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#384B60',
        overflow: 'hidden',
        paddingHorizontal: 24,
    },

    textItem: {
        fontSize: 20,
        color: '#F8F7F2',
        fontFamily: 'Poppins_400Regular',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },

    searchForm: {
        marginBottom: 8,
    },

    label: {
        color: '#F8F7F2',
        fontFamily: 'Poppins_400Regular'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
});

export default styles;