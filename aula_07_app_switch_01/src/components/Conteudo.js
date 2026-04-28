import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { estilos } from '../styleSheet/estilos';

function Conteudo() {
    const [modoNoturno, setModoNoturno] = useState(false);

    function alterarModo(valor) {
        setModoNoturno(valor);
    }

    return (
        <View
            style={[
                estilos.area,
                { backgroundColor: modoNoturno ? '#1E1E1E' : '#F2F2F2' },
            ]}
        >
            <View
                style={[
                    estilos.areaTopo,
                    { alignItems: modoNoturno ? 'center' : 'flex-start' },
                ]}
            >
                <View style={estilos.linhaSwitch}>
                    <Text
                        style={[
                            estilos.textoModo,
                            { color: modoNoturno ? '#FFFFFF' : '#000000' },
                        ]}
                    >
                        {modoNoturno ? 'Modo Noturno' : 'Modo Claro'}
                    </Text>

                    <Switch
                        value={modoNoturno}
                        onValueChange={alterarModo}
                        trackColor={{ false: '#B0B0B0', true: '#7ED6CF' }}
                        thumbColor={modoNoturno ? '#00A896' : '#F4F3F4'}
                    />
                </View>

                <Text
                    style={[
                        estilos.subtitulo,
                        { color: modoNoturno ? '#EAEAEA' : '#000000' },
                    ]}
                >
                    Componente Switch
                </Text>
            </View>

            <View style={estilos.areaImagem}>
                <Image
                    source={
                        modoNoturno
                            ? require('../img/lua.png')
                            : require('../img/sol.png')
                    }
                    style={[
                        estilos.imagem,
                        { width: modoNoturno ? 260 : 110, height: modoNoturno ? 260 : 110 },
                    ]}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

export default Conteudo;