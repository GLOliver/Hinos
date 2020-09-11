import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#384B60',
        justifyContent: 'center',
        padding: 40,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 68,
        width: '100%',
        backgroundColor:'#5C93C4',
        borderRadius: 8,
        padding: 24,
        flexDirection: 'row',
        justifyContent:'center',
    },

    favoriteListButton: {
        backgroundColor: '#5C93C4',
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
        marginLeft: 20,
    },
});

export default styles;