import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    containerMestre: {
        flex: 1,
        backgroundColor: '#384B60',
        overflow: 'hidden',
        justifyContent: 'space-between',
    },

    container: {
        flex: 1,
        backgroundColor: '#384B60',
        overflow: 'hidden',
        justifyContent: 'space-between',
        paddingTop: 30,
    },


    letra: {
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        //fontSize: 16,
        //lineHeight: 27,
        color: '#F8F7F2',
        paddingBottom: 40,
    },

    scroll: {
    },


    footer: {
        backgroundColor: '#5C93C4',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 10,
        borderRadius: 8,
    },

    footerHead: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  

    footerTitle: {
        fontFamily: 'Archivo_700Bold',
        color: '#F8F7F2',
        fontSize: 20,
        lineHeight: 32,
        maxHeight: 160,
    },

    footerContainerButton: {
        flexDirection: 'row',
    },
    
    fontButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    footerContent: {
        marginTop: 5,
    },

    footerContentText: {
        fontFamily: 'Poppins_400Regular',
        color: '#F8F7F2',
        fontSize: 14,
    },

    footerContentTextBold: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

});

export default styles;