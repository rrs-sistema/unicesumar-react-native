import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    fundoPrincipal: {
        flex: 1,
        backgroundColor: '#d9d9d9',
        padding: 10,
    },

    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomRightRadius: 28,
        overflow: 'hidden',
    },

    cabecalhoPrincipal: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },

    tituloPrincipal: {
        fontSize: 24,
        color: '#000',
    },

    subtituloPrincipal: {
        fontSize: 32,
        color: '#000',
    },

    textoCurso: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },

    imagemPrincipal: {
        width: 280,
        height: 260,
    },

    corpoPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },

    tituloCuriosidades: {
        fontSize: 26,
        color: '#000',
        marginBottom: 10,
    },

    botaoPrincipal: {
        width: 135,
        height: 30,
        borderWidth: 2,
        borderColor: '#9b0000',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },

    textoBotao: {
        color: '#000',
        fontSize: 12,
    },

    fundoTelaConteudo: {
        flex: 1,
        backgroundColor: '#8b0000',
        padding: 10,
    },

    containerConteudo: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomRightRadius: 28,
        overflow: 'hidden',
    },

    cabecalhoConteudo: {
        height: 150,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        gap: 25,
    },

    imagemCabecalho: {
        width: 120,
        height: 100,
    },

    labelTela: {
        fontSize: 12,
        color: '#9b0000',
        marginBottom: 5,
    },

    tituloConteudo: {
        fontSize: 28,
        color: '#000',
    },

    corpoConteudo: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 25,
    },

    subtituloConteudo: {
        fontSize: 18,
        color: '#a00000',
        marginBottom: 15,
        marginTop: 10,
    },

    paragrafo: {
        fontSize: 13,
        color: '#000',
        textAlign: 'justify',
        lineHeight: 20,
        marginBottom: 15,
    },

    fraseDestaque: {
        fontSize: 20,
        color: '#a00000',
        lineHeight: 28,
        marginVertical: 15,
    },

    imagemTexto: {
        width: 130,
        height: 90,
        alignSelf: 'center',
        marginBottom: 10,
    },

    linhaImagemTexto: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        marginVertical: 15,
    },

    imagemPequena: {
        width: 120,
        height: 90,
    },

    rodape: {
        height: 35,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    textoRodape: {
        fontSize: 12,
        color: '#000',
    },
});