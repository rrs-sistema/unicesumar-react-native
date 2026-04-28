import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    areaFundoClaro: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        paddingTop: 32,
        paddingHorizontal: 22,
    },

    areaFundoNoturno: {
        flex: 1,
        backgroundColor: '#1F1F1F',
        paddingTop: 32,
        paddingHorizontal: 22,
    },

    topoEsquerda: {
        alignItems: 'flex-start',
    },

    topoCentralizado: {
        alignItems: 'center',
    },

    linhaSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },

    textoModo: {
        fontSize: 24,
        fontWeight: '500',
        marginRight: 10,
    },

    textoTitulo: {
        fontSize: 20,
        fontWeight: '500',
    },

    textoEscuro: {
        color: '#111111',
    },

    textoClaro: {
        color: '#FFFFFF',
    },

    textoClaroSecundario: {
        color: '#E8E8E8',
    },

    areaImagem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },

    imgClara: {
        width: 95,
        height: 95,
        marginTop: 6,
    },

    imgNoturna: {
        width: 270,
        height: 270,
        marginTop: 10,
    },
});

export { estilos };