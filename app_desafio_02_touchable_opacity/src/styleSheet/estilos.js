import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    areaFundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },

    areaTitulo: {
        marginBottom: 30,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#dd7b22',
        textAlign: 'center',
    },

    areaImg: {
        marginBottom: 30,
    },

    img: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },

    textoFrase: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginBottom: 25,
        paddingHorizontal: 20,
    },

    botao: {
        backgroundColor: '#dd7b22',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },

    areaBotao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});