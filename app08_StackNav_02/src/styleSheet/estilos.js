import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    Principal_Fundo: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    Principal_SubTit: {
        fontSize: 20,
        color: '#000',
        marginBottom: 35,
    },

    Principal_img: {
        width: 280,
        height: 250,
        resizeMode: 'contain',
    },

    Linha: {
        width: 260,
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 25,
    },

    Principal_Tit: {
        fontSize: 28,
        color: '#000',
        marginBottom: 20,
    },

    Principal_SubTit2: {
        fontSize: 16,
        color: 'blue',
        marginTop: 45,
    },

    Tela01_Fundo: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 20,
        paddingTop: 55,
    },

    Tela02_Fundo: {
        flex: 1,
        backgroundColor: '#2b1712',
        padding: 20,
        paddingTop: 55,
    },

    Tela03_Fundo: {
        flex: 1,
        backgroundColor: '#3a1b1b',
        padding: 20,
        paddingTop: 55,
    },

    Tela_Titulo: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },

    Planeta_img: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 25,
    },

    Tela_Texto: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 23,
        marginBottom: 18,
    },

    Area_Botoes: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    Area_Botao_Unico: {
        marginTop: 70,
        alignItems: 'center',
    },
});