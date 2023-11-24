import {SafeAreaView,Text,Image,ScrollView,StyleSheet,View} from 'react-native';

export default function Berserk(){
  return (
    

    

      <SafeAreaView style={estilo.container}>
    <ScrollView>
                <Text style={estilo.titulo}>
     Bem-Vindo!
                </Text>
             
         
                          <Image style ={estilo.imagem} source={require("./assets/Limao.jpg")} />

          


          <Text style={estilo.titulo}>
                Bem-vindo ao Bernimes, nosso app conta com a historia de dois animes para reitirar as duvidas da fandom      
                </Text>
   

        


           


          
              </ScrollView>

</SafeAreaView>

  

    
  
  );
}

const estilo = StyleSheet.create ({

container:{
    flex:1,
 
    justifycontent:'center',
    backgroundColor:'#FFFFFF',
    width:395,
    height:800
  },
 
  imagem:
  {
    width:350,
    height:300,
   marginTop:30,
   left:20,
    borderRadius:30,
  },

  
  titulo:
  {
      textAlign: 'center',
      color:'#000000',
      fontSize:30,
      marginTop: 5 ,
  },


  }
  );