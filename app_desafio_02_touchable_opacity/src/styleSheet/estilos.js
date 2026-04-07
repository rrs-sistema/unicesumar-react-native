import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    areaFundo: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
    },

    areaTitulo: {
        height: 70,
        width: '100%',
        backgroundColor: '#F7A400',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    areaImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    img: {
        width: 260,
        height: 260,
        resizeMode: 'contain',
    },

    areaConteudo: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
    },

    textoFrase: {
        color: '#3F51B5',
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },

    botao: {
        width: 240,
        height: 52,
        borderWidth: 2,
        borderColor: '#F7A400',
        borderRadius: 26,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
    },

    areaBotao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconeBotao: {
        width: 26,
        height: 26,
        marginRight: 10,
        resizeMode: 'contain',
    },

    textoBotao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F7A400',
    },
});

export { estilos };