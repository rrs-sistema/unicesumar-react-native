import React from "react";
import {View, Text, Image } from 'react-native';


function App(){
  return(
    <View style={{ flex: 1, beckgrondColo: 'orange', margin: 10 }}>

      <View style={{
        alignItems: 'center', backgroundColor: 'skyblue', flexDirection: 'column', paddingVertical:20
      }}>
        <Text style={{ fontSize:30, color: "blue", marginBottom:20}}>Componente Imagem</Text>

      <Image 
        source={require('./assets/rivaNico.png')}
        style={{ width: 200, height: 200 }}
      />  
      </View>

      <View style={{
        alignItems: 'center', backgroundColor: '#5f9ea0', flexDirection:'row', paddingVertical:20, paddingHorizontal:10, justifyContent: "space-around"
      }}>
      
      <Text style={{
        fontSize:20, color: "white", marginBottom:20, width: '60%', textAling:"justfy"
      }}> 
      O react Native pode estilizar o componente Imagem de várias formas</Text>

      <Image 
      source={require('./assets/nicholas.png')}
      style={{ width: 100, height: 100, borderColor: 'green', borderWidth: 2, borderRadius: 50 }}
      />  
      </View>
      <View style={{
        alignItems:'center', backgroundColor: '#dcdcdc', flexDirection: 'row', paddingHorizontal: 10, justifyContent: "space-around"
      }}>
        <Image 
        source={require('./assets/rivaldo.png')}
        style={{
          width: 100, height: 100, borderColor: 'white', borderWidth: 2, borderTopLeftRadius: 50, marginHorizontal:20
        }}/>
        <Text style={{
          fontSize: 15, color: "gray", marginBottom: 20, width: '70%', textAlign: "justify"
        }}>

        - Alterando o formato e a cor da borda;{'\n'}
        - Alterando as dimensões e o posicionamento;{'\n'}
        - Alterando margens e espaçamentos, etc....
        </Text>

      </View>
    </View>

  );
}

export default App;
