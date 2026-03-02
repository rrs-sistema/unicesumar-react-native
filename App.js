import React from "react";
import {View, Text, Image } from 'react-native';


function App(){
  return(

    <View>

      <Text>Socorro!!</Text>

      <Image 
       
        source={require('./assets/rivaNico.png')}
        style={{ width: 200, height: 200 }}
      />
   
    </View>

  );
}

export default App;
